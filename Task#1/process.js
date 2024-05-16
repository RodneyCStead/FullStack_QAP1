// Written by: Rodney Stead
// Written on: May 16th, 2024

// The process object provides information about and control over the current Node.js process. In the following code, 
// I log various properties of the process object to the console. 

// Log the command line arguments
console.log("Command line arguments:", process.argv);

// Log the current working directory
console.log("Current directory:", process.cwd());

// Log the Node.js version
console.log("Node.js version:", process.version);

// Log the process ID
console.log("Process ID:", process.pid);

// Log the environment variables
console.log("Environment Variables:", process.env);

// Log the system platform
console.log("Platform:", process.platform);

// Log the uptime of the process
console.log("Uptime:", process.uptime());

// Exit the process
process.exit();