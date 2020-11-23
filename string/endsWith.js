const _ = require('lodash');

_.endsWith('abc', 'c');
// => true
 
_.endsWith('abc', 'b');
// => false
 
const aaa =  _.endsWith('abca', 'c', 4);
// => true

console.log(aaa);

// endsWith - Yazının sondan itibaren başa doğru ne yazdığını kontrol eder, geri dönüş true veya false döner.