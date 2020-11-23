const _ = require('lodash');

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omitBy(object, _.isNumber);
// => { 'b': '2' }

// omitBy - Arrayin içersinde belirtilen koşulun tersini objeden çeker.