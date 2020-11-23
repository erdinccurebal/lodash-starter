const _ = require('lodash');

_.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
// => 'foo-bar'
 
_.kebabCase('__FOO_BAR__');
// => 'foo-bar'

// kebabCase - Yazıyı sağdan soldan yemizler ve KebabCase türüne cevirir.