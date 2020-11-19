const _ = require('lodash');

_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
 
_.toArray('abc');
// => ['a', 'b', 'c']
 
_.toArray(1);
// => []

_.toArray(null);
// => []

// toArray - Veriyi array'e çevirir. 