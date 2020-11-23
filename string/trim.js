const _ = require('lodash');

_.trim('  abc  ');
// => 'abc'
 
_.trim('-_-abc-_-', '_-');
// => 'abc'

const result = _.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']

console.log(result);

// trim - Etrafındaki boşlukları siler.