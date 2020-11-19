const _ = require('lodash');

_.isSet(new Set);
// => true
 
_.isSet(new WeakSet);
// => false

// isSet - Objenin set edilip edilmediğini kontrol eder.