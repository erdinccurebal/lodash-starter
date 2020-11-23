const _ = require('lodash');

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

// pick - Arrayin içersinde parametleri çeker.