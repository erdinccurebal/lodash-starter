const _ = require('lodash');

_.toLower('--Foo-Bar--');
// => '--foo-bar--'
 
_.toLower('fooBar');
// => 'foobar'

const result = _.toLower('__FOO_BAR__');
// => '__foo_bar__'

console.log(result);

// toLower - Yazıları küçük yapar.