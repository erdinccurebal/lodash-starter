const _ = require('lodash');

var object = { 'a': [{ 'b': { 'c': 7 } }] };
_.unset(object, 'a[0].b.c');
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };
 
_.unset(object, ['a', '0', 'b', 'c']);
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };

// unset - Obje içerisindeki veriyi siler.