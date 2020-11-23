const _ = require('lodash');

var wrapped = _([1, 2]);
 
wrapped[Symbol.iterator]() === wrapped;
// => true
 
Array.from(wrapped);
// => [1, 2]

// prototype - Verinin lodash verisi olup olmadığını kontrol eder.