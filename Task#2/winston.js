// Written by: Rodney Stead
// Written on: May 16th, 2024

// The Winston module is a vesatile logging library for Node.js. It is used to record the flow of your application
// ,errors, important information and more. It is espeacially important for debugging your application. In the code below
// 2 logs will be created in the 'error.log' and 'combined.log' files and will be outputted to the teminal too.
// The link to the official documentation is github for Winston is --> https://github.com/winstonjs/winston <--

// Importing the winston module
const winston = require('winston');

// Create a new logger instance with specific configurations
const logger = winston.createLogger({
  level: 'info',

  // Set the format of the output message to be JSON.
  format: winston.format.json(),

  // Define where the logs should be stored. In this case, two file transports and one console transport are defined:
  transports: [
    
    // All error logs will be stored in a file named 'error.log'.
    new winston.transports.File({ filename: 'error.log', level: 'error' }),

    // All logs (info and above) will be stored in a file named 'combined.log'.
    new winston.transports.File({ filename: 'combined.log' }),

    // All logs will also be output to the console.
    new winston.transports.Console()
  ]
});


// Logging an info level message 'Hello world'. This will be written to 'combined.log'.
logger.info('Hello world');

// Logging an error level message 'This is an error message'. This will be written to both 'error.log' and 'combined.log'.
logger.error('This is an error message');