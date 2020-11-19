const _ = require('lodash');

_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false

// isObject - Nesne olup olmadığnı kontrol eder.