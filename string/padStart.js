const _ = require('lodash');

_.padStart('abc', 6);
// => '   abc'
 
_.padStart('abc', 6, '_-');
// => '_-_abc'
 
const aaa = _.padStart('abc', 3);
// => 'abc'

console.log(aaa);

// padStart - Verinin soldan karakter ekler. 1 Parametre ana metin, 2 parametre sağına soğuna eklenecek karakter sayısı, 3 Parametre eklenecek karakter.