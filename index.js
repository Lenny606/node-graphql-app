const express = require('express');
const path = require('path');
const {graphqlHTTP} = require('express-graphql');
const {schemas} = require('./graphql/schemas');
const {resolvers} = require('./graphql/resolvers');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express.js application' });
});

//API
app.use("/graphql", graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true
}))

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
