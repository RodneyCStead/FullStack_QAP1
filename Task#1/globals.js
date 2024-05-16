// Written by: Rodney Stead
// Written on: May 16th, 2024

// The global object represents the global namespace, the global object contains all the built in objest
// and functions that are availble globally in your Node.js application. Besisdes the built in objects such as console, process
// and buffer, ect. you can also define your own global variables and functions.

// Defineing a global variable
global.myGlobalVar = 'Hello, world!';

// Access the global variable, this will output 'Hello, world!'
console.log(global.myGlobalVar);

// Defineing a global function
global.myGlobalFunction = function() {
  console.log('This is a global function!');
};

// Call the global function, this will output 'This is a global function!'
global.myGlobalFunction(); 