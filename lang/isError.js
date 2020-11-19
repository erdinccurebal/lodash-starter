const _ = require('lodash');

const test01 = new Error();
// => true
 
const test02 = Error;
// => false

console.log(_.isError(test01));

// isError - Verinin hata olup olmadığını kontrol eder.