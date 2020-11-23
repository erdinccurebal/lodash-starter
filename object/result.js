const _ = require('lodash');

var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 
_.result(object, 'a[0].b.c1');
// => 3
 
_.result(object, 'a[0].b.c2');
// => 4
 
_.result(object, 'a[0].b.c3', 'default');
// => 'default'
 
_.result(object, 'a[0].b.c3', _.constant('default'));
// => 'default'

// result - Objenin içersinden belirtilen parametreye göre veriyi ceker.