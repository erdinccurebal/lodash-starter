const _ = require('lodash');

_.isSafeInteger(3);
// => true
 
_.isSafeInteger(Number.MIN_VALUE);
// => false
 
_.isSafeInteger(Infinity);
// => false
 
_.isSafeInteger('3');
// => false


// isSafeInteger - Tamı tamına bir integer olup olmadığını kontrol eder.