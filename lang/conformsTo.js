const _ = require('lodash');

var object = { 'a': 1, 'b': 2 };
 
_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
 
_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false

// conformsTo - Obje içersindeki verinin koşula göre uygunluğuna bakar, true veya false döner.
