const _ = require('lodash');

const test01 = _.isNull(null);
// => true

const test02 = _.isNull(void 0);
// => false

// isNull - Null değer olup olmadığını kontrol eder.