const _ = require('lodash');

var object = { 'a': 1, 'b': 2 };

const test01 = _.isMatch(object, { 'b': 2 });
 
const test02 = _.isMatch(object, { 'b': 1 });

console.log(test01, test02);

// isMatch - Verinin verilen obje içinde olup olmadığını kontrol eder.