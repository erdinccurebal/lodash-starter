const _ = require('lodash');

_.camelCase('Foo Bar');
// => 'fooBar'
 
_.camelCase('--foo-bar--');
// => 'fooBar'
 
_.camelCase('__FOO_BAR__');
// => 'fooBar'

// camelCase - Yazıyı düzeltir ve her cümlenin başını büyük yapar.