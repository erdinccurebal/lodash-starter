const _ = require('lodash');

_.padEnd('abc', 6);
// => 'abc   '
 
_.padEnd('abc', 6, '_-');
// => 'abc_-_'
 
_.padEnd('abc', 3);
// => 'abc'
 
const aaa = _.padEnd('abc', 3);
// => 'abc'

console.log(aaa);

// padEnd - Verinin sağına karakter ekler. 1 Parametre ana metin, 2 parametre sağına soğuna eklenecek karakter sayısı, 3 Parametre eklenecek karakter.