const _ = require('lodash'); 

_.isNumber(3);
// => true
 
_.isNumber(Number.MIN_VALUE);
// => true
 
_.isNumber(Infinity);
// => true
 
_.isNumber('3');
// => false

// isNumber - Numara olup olmadığını kontrol eder.