const _ = require('lodash');

const test01 = _.isNaN(NaN);
 
const test02 = _.isNaN(undefined);

const test03 = isNaN(undefined);

const test04 = _.isNaN(new Number(NaN));

console.log(test01, test02, test03, test04);

// isNaN - NaN olup olmadığını kontrol eder.