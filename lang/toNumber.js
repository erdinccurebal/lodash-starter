const _ = require('lodash');

_.toNumber(3.2);
// => 3.2
 
_.toNumber(Number.MIN_VALUE);
// => 5e-324
 
_.toNumber(Infinity);
// => Infinity
 
const test = _.toNumber('3.2');
// => 3.2

console.log(test)

// toNumber - Veriyi integer'a çevirir.