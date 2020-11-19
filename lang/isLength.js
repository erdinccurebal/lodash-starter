const _ = require('lodash');

const test01 = _.isLength(5);
 
const test02 = _.isLength(Number.MIN_VALUE);

console.log(test01, test02);


// isLength - Verinin uzunluk birimi olup olmadığını kontrol eder.