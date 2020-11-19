const _ = require('lodash');

_.isEmpty(null);
// => true
 
_.isEmpty(true);
// => true
 
_.isEmpty(1);
// => true
 
_.isEmpty([1, 2, 3]);
// => false
 
_.isEmpty({ 'a': 1 });
// => false

console.log(_.isEmpty(undefined))

// isEmpty - True , NaN , Undefined, False ve Null true döner, diğerleri false döner.