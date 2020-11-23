const _ = require('lodash');

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }


// omit - Arrayin içersinde belirtilen paremetleri objeden cıkarır.