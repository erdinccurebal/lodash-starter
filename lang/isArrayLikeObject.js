const _ = require('lodash');

_.isArrayLikeObject([1, 2, 3]);
// => true

_.isArrayLikeObject('abc');
// => false

_.isArrayLikeObject(_.noop);
// => false

console.log(_.isArrayLikeObject([1, 5, 6, 3]))

// isArrayObject - Sadece array türünü kabul eder.