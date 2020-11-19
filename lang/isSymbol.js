const _ = require('lodash');

_.isSymbol(Symbol.iterator);
// => true
 
_.isSymbol('abc');
// => false

// isSymbol - Symbol olup olmadığını kontrol eder.