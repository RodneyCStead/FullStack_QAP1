// Written by: Rodney Stead
// Written on: May 16th, 2024

// The console object provides access to the console of the web browser or the server enviroment (like Node.js).
// It is primarily used for logging and debugging purposes.

// Logging a simple message
console.log('Hello, world!');

// Logging a simple greeting with a variable
let greeting = 'Hello, Peter!';
console.log(greeting);

// Logging a error message
console.error('This is an error message');

// Logging a warning message
console.warn('This is a warning message');

// Use console.assert to log a message only if the assertion fails
console.assert(1 === 2, '1 is not equal to 2');

// This is coder for a loop to measure in time how long it takes for the counter to reach 1000000 by useing
// console.time and console.timeEnd.
console.time('Operation');
let counter = 0;
while (counter < 1000000) {
    counter++;
}
console.log(counter);
console.timeEnd('Operation');