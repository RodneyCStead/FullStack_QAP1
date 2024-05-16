// Written by: Rodney Stead
// Written on: May 16th, 2024

// The http module is used to create http servers and clients. It provides a set of methods and properties 
// for working with http from the server side.

// Import the http module from Node.js
const http = require('http');

// Create a new HTTP server. The function passed into createServer
// will be called for every client request.
const server = http.createServer((req, res) => {
  
  // Log the request method and URL to the console
  console.log(`Received a ${req.method} request for ${req.url}`);

  // Set the HTTP status code of the response to 200 (OK)
  res.statusCode = 200;

  // Set the Content-Type of the response to a plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send a response body and end the response
  res.end('Hello, world!\n');
});

// Start the server listening for connections on a specific port
server.listen(3000, '127.0.0.1', () => {
  // Log a message to the console when the server starts listening
  console.log('Server running at http://127.0.0.1:3000/');
});