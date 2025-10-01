# Express.js GraphQL Application

An Express.js application with GraphQL API integration and static file serving.

## Features

- Express.js server setup
- GraphQL API implementation
- GraphiQL browser interface
- Static file serving
- Error handling middleware

## Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd node-graphql-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

## Usage

Once the server is running, you can access:

- Web interface: [http://localhost:3000](http://localhost:3000)
- GraphQL endpoint: [http://localhost:3000/graphql](http://localhost:3000/graphql)
- GraphiQL interface: [http://localhost:3000/graphql](http://localhost:3000/graphql) (in browser)

## Project Structure

```
node-graphql-app/
├── index.js           # Main application entry point
├── package.json       # Project dependencies and scripts
├── public/            # Static files
│   └── index.html     # Simple web interface
├── graphql/           # GraphQL implementation
│   ├── schemas.js     # GraphQL schema definitions
│   └── resolvers.js   # GraphQL resolvers
└── routes/            # Application routes
    └── api.js         # API endpoints
```

## API Endpoints

- `GET /api`: Returns API status and timestamp
- `GET /api/users`: Returns a list of sample users

## GraphQL API

The application provides a GraphQL API endpoint at `/graphql`. You can use the GraphiQL interface to explore and test queries.

### Available Queries

- `hello`: Returns a TestData object with text and views properties
- `users`: List all users
- `user(id: ID!)`: Get a single user by ID
- `posts`: List all posts
- `post(id: ID!)`: Get a single post by ID

Example query (hello):
```graphql
{
  hello {
    text
    views
  }
}
```

Example query (list users):
```graphql
{
  users {
    _id
    email
    status
    posts { _id title }
  }
}
```

Example query (get post by id):
```graphql
query($id: ID!){
  post(id: $id){
    _id
    title
    content
    author { _id email }
    createdAt
  }
}
```

### Available Mutations

- `createUser(userInput: UserInput): User!`
- `updateUserStatus(id: ID!, status: String!): User!`
- `createPost(postInput: PostInput!): Post!`
- `deletePost(id: ID!): Boolean!`

Example mutation (create user):
```graphql
mutation($email: String!, $password: String!){
  createUser(userInput: { email: $email, password: $password }){
    _id
    email
    status
  }
}
```

Example mutation (create post):
```graphql
mutation($authorId: ID!){
  createPost(postInput: { title: "My First Post", content: "Hello GraphQL", authorId: $authorId }){
    _id
    title
    author { _id email }
  }
}
```

Example mutation (update user status):
```graphql
mutation($id: ID!){
  updateUserStatus(id: $id, status: "SUSPENDED"){ _id email status }
}
```

Example mutation (delete post):
```graphql
mutation($id: ID!){
  deletePost(id: $id)
}
```

Notes:
- This project uses in-memory arrays for Users and Posts for simplicity. Restarting the server clears the data.
- Nested fields like `Post.author` and `User.posts` are resolved by embedding related objects in-memory.

## License

ISC
