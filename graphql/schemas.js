const {buildSchema} = require('graphql');

const schemas = buildSchema(`
    
    type Post {
        _id: ID!
        title: String!
        content: String!
        image: String
        author: User!
        createdAt: String!  
        updatedAt: String!
    }
    
    type User {
        _id: ID!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }
    
    input UserInput {
        email: String!
        password: String!
    }

    input PostInput {
        title: String!
        content: String!
        image: String
        authorId: ID!
    }
    
    type TestData {
        text: String!
        views: Int!
    } 
       
    type Mutation {
         createUser(userInput: UserInput): User!
         updateUserStatus(id: ID!, status: String!): User!
         createPost(postInput: PostInput!): Post!
         deletePost(id: ID!): Boolean!
    }
    type Query {
        hello: TestData!
        user(id: ID!): User
        users: [User!]!
        post(id: ID!): Post
        posts: [Post!]!
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`)

module.exports = {schemas};
