const _ = require('lodash');

_.lowerCase('--Foo-Bar--');
// => 'foo bar'
 
_.lowerCase('fooBar');
// => 'foo bar'
 
_.lowerCase('__FOO_BAR__');
// => 'foo bar'

// lowerCase - Yazıları düzeltir, ve hepsini küçük yapar.