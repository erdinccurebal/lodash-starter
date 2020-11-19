const _ = require('lodash');

const test01 = _.isFunction(_);
 
const test02 = _.isFunction(/abc/);

console.log(test01, test02);

// isFunction - Fonksiyon olup olmadığını kontrol eder.