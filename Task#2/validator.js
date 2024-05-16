// Written by: Rodney Stead
// Written on: May 16th, 2024

// The validator library is used to validate and sanitize strings. It provides a collection of string validation methods 
// for common use cases such as email validation and date valadiation as shown below. It can also be used to validate.
// here is the official github link to check out the full library --> https://github.com/validatorjs/validator.js#validators <--

// Importing the validator module
const validator = require('validator');

// Use the isEmail method to validate an email address
const email = 'test@example.com';
console.log(validator.isEmail(email)); // Outputs: true

// Use the isEmail method to validate an email address
const email2 = 'test@examplecom';
console.log(validator.isEmail(email2)); // Outputs: false

// Use the isDate method to validate a date
const date = '2022-12-31';
console.log(validator.isDate(date)); // Outputs: true

// Use the isDate method to validate a date
const date2 = '2022-2-31';
console.log(validator.isDate(date2)); // Outputs: false