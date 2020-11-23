const _ = require('lodash');

const result = _.upperFirst('fred');
// => 'Fred'
 
_.upperFirst('FRED');
// => 'FRED'

console.log(result);

// upperFirst - Yazının baş harfini büyük yapar.