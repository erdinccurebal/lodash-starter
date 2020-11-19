const _ = require('lodash');

_.isRegExp(/abc/);
// => true
 
_.isRegExp('/abc/');
// => false

// isRegExp - İfadenin RegExp türünde yazılıp yazılmadığını kontrol eder.