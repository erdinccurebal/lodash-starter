const _ = require('lodash');

var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
 
var values = _.memoize(_.values);
console.log(values(object))

// memoize - Objenin içinden verilen koşula göre, verileri çeker.