const _ = require('lodash');

_.toUpper('--foo-bar--');
// => '--FOO-BAR--'
 
_.toUpper('fooBar');
// => 'FOOBAR'

const result = _.toUpper('__foo_bar__');
// => '__FOO_BAR__'

console.log(result);

// toUpper - Yazıların hepsini büyük yapar.