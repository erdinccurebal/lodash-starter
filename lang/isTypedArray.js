const _ = require('lodash');

_.isTypedArray(new Uint8Array);
// => true
 
_.isTypedArray([]);
// => false

// isTypedArray - Class türünde bir array olup olmadığını kontrol eder.