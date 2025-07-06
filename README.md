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

Example query:
```graphql
{
  hello {
    text
    views
  }
}
```

Expected response:
```json
{
  "data": {
    "hello": {
      "text": "Hello World",
      "views": 1001
    }
  }
}
```

## License

ISC
