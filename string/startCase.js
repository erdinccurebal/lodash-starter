const _ = require('lodash');

_.startCase('--foo-bar--');
// => 'Foo Bar'
 
_.startCase('fooBar');
// => 'Foo Bar'

const result = _.startCase('__FOO_BAR__');
// => 'FOO BAR'

console.log(result);

// startCase - Yazının büyük olan harflerininin soluna boşluk koyar, yazıyı düzeltir.