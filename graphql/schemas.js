const {buildSchema} = require('graphql');

const schemas = buildSchema(`
    type TestData {
        text: String!
        views: Int!
    }

    type Query {
        hello: TestData!
    }

    schema {
        query: Query
    }
`)

module.exports = { schemas };
