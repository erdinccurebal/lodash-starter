const _ = require('lodash');

_.isArrayBuffer(new ArrayBuffer(2));
// => true
 
_.isArrayBuffer(new Array(2));
// => false

// isArrayBuffer - Buffer dizi olup olmadığını kontrol eder.