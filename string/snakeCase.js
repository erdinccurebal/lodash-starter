const _ = require('lodash');

_.snakeCase('Foo Bar');
// => 'foo_bar'
 
_.snakeCase('fooBar');
// => 'foo_bar'
 
const result = _.snakeCase('--FOO-BAR--');
// => 'foo_bar'

console.log(result);

// snakeCase - Yazıyı düzelt ve her yazıyı küçük yapar, boşlukları alt tire yapar.