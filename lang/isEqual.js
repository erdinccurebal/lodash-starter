const _ = require('lodash');

var object = { 'a': 1 };
var other = { 'a': 2 };

console.log(_.isEqual(object, other));

// isEqual - Verilerin aynı olup olmadığını kontrol eder.