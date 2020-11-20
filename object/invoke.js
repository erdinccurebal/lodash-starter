const _ = require('lodash');

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4, 5] } }] };
 
console.log(_.invoke(object, 'a[0].b.c.slice', 1, 4));
// => [2, 3, 4]

// invoke - Obje içerisinde fonksiyon uygulayarak verilere ulaşmayı sağlar.