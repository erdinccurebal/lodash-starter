const _ = require('lodash');

_.repeat('*', 3);
// => '***'
 
_.repeat('abc', 2);
// => 'abcabc'

const result = _.repeat('abc', 0);
// => ''

console.log(result);

// repeat - Veriyi tekrar eder.