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
    
    type TestData {
        text: String!
        views: Int!
    } 
       
    type Mutation {
         createUser(userInput: UserInput): User!
    }
    type Query {
        hello: TestData!
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`)

module.exports = {schemas};
