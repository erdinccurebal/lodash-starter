const _ = require('lodash');

_.isFinite(Infinity);
// => false
 
_.isFinite('3');
// => false

const test01 = _.isFinite(3);
 
const test02 = _.isFinite(Number.MIN_VALUE);

console.log(test01);

// isFinite - Ölçülebilen elaman mıdır diye kontrol eder.