// Simple in-memory data stores for learning purposes
let users = [];
let posts = [];
let idCounter = 1;

function nextId() {
  return String(idCounter++);
}

const resolvers = {
  // Query resolvers
  hello() {
    return {
      text: 'Hello World',
      views: 1001
    };
  },
  user({ id }) {
    return users.find(u => u._id === id) || null;
  },
  users() {
    return users;
  },
  post({ id }) {
    return posts.find(p => p._id === id) || null;
  },
  posts() {
    return posts;
  },

  // Mutation resolvers
  createUser: async function ({ userInput }) {
    const { email, password } = userInput;

    // naive duplicate check for learning purposes
    if (users.some(u => u.email === email)) {
      throw new Error('User with this email already exists');
    }

    const newUser = {
      _id: nextId(),
      email,
      password: password || null,
      status: 'ACTIVE',
      posts: []
    };
    users.push(newUser);
    return newUser;
  },

  updateUserStatus({ id, status }) {
    const user = users.find(u => u._id === id);
    if (!user) {
      throw new Error('User not found');
    }
    user.status = status;
    return user;
  },

  createPost({ postInput }) {
    const { title, content, image, authorId } = postInput;
    const author = users.find(u => u._id === authorId);
    if (!author) {
      throw new Error('Author (User) not found');
    }
    const now = new Date().toISOString();
    const newPost = {
      _id: nextId(),
      title,
      content,
      image: image || null,
      author, // embed full user object so nested fields resolve
      createdAt: now,
      updatedAt: now
    };
    posts.push(newPost);
    // also link post to author's posts list
    author.posts = author.posts.concat([newPost]);
    return newPost;
  },

  deletePost({ id }) {
    const idx = posts.findIndex(p => p._id === id);
    if (idx === -1) return false;
    const [removed] = posts.splice(idx, 1);
    // remove from author's posts list if present
    if (removed && removed.author) {
      const author = users.find(u => u._id === removed.author._id);
      if (author) {
        author.posts = author.posts.filter(p => p._id !== id);
      }
    }
    return true;
  }
};

module.exports = { resolvers };
