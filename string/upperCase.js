const _ = require('lodash');

const result = _.upperCase('--foo-bar');
// => 'FOO BAR'
 
_.upperCase('fooBar');
// => 'FOO BAR'
 
_.upperCase('__foo_bar__');
// => 'FOO BAR'

console.log(result);

// upperCase - Yazıyı düzenler ve Baş harfi büyük olan kelimenin soluna boşluk ekler, bütün yazıyı büyük yapar.