const _ = require('lodash');

_.pad('abc', 8);
// => '  abc   '
 
_.pad('abc', 8, '_-');
// => '_-abc_-_'
 
const aaa = _.pad('abc', 9, '-');
// => 'abc'

console.log(aaa)

// pad - Verinin sağına solanı karakter ekler. 1 Parametre ana metin, 2 parametre sağına soğuna eklenecek karakter sayısı, 3 Parametre eklenecek karakter.