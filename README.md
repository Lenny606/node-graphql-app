# Express.js Application

A simple Express.js application with API endpoints and static file serving.

## Features

- Express.js server setup
- API routes with sample endpoints
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
- API endpoint: [http://localhost:3000/api](http://localhost:3000/api)
- Sample users: [http://localhost:3000/api/users](http://localhost:3000/api/users)

## Project Structure

```
node-graphql-app/
├── index.js           # Main application entry point
├── package.json       # Project dependencies and scripts
├── public/            # Static files
│   └── index.html     # Simple web interface
└── routes/            # Application routes
    └── api.js         # API endpoints
```

## API Endpoints

- `GET /api`: Returns API status and timestamp
- `GET /api/users`: Returns a list of sample users

## License

ISC