const _ = require('lodash');

_.isObjectLike({});
// => true
 
_.isObjectLike([1, 2, 3]);
// => true
 
_.isObjectLike(_.noop);
// => false
 
_.isObjectLike(null);
// => false

// isObjectLike - Nesneye benzeyip benzemediğini kontrol eder.