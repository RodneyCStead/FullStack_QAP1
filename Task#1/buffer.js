// Written by: Rodney Stead
// Written on: May 16th, 2024

// The buffer core object provides a way to handle streams of binary data. It can manipulate, store, and interact with streams of binary data.
// The buffer object can be useful in various scenarios such as reading data from a file, or receiving packets over the network.

// Create a buffer from a string using utf-8 encodeing
const buf = Buffer.from('Hello, world!', 'utf8');

// Log the buffer to console, showing binary data
console.log(buf);

// Converts the buffer back to a string and logs it
console.log(buf.toString());