const _ = require('lodash');

_.toLength(3.2);
// => 3
 
_.toLength(Number.MIN_VALUE);
// => 0
 
_.toLength(Infinity);
// => 4294967295
 
_.toLength('3.2');
// => 3

// toLength - Okunabilir bir uzunluğa çevirir.