const _ = require('lodash');

_.toSafeInteger(3.2);
// => 3
 
_.toSafeInteger(Number.MIN_VALUE);
// => 0
 
_.toSafeInteger(Infinity);
// => 9007199254740991
 
_.toSafeInteger('3.2');
// => 3

// toSafeInteger - Double veriler dahil bire bir integer'a çevirir.