const _ = require('lodash');

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

// pickBy - Arrayin içersinde belirtilen koşulu göre objeden çeker.