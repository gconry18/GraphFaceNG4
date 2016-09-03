console.log('app.js File Start!');

// Import the Clay package
var Clay = require('pebble-clay');

// Load our Clay configuration file
var clayConfig = require('./config');

// Initialize Clay
var clay = new Clay(clayConfig);
console.log('app.js Clay Initialized!');