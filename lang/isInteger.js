const _ = require('lodash');

const test01 = _.isInteger(3);
 
const test02 = _.isInteger(Number.MIN_VALUE);

console.log(test01, test02);

// isInteger - Verinin integer veri tipinde olup olmadığını kontrol eder.