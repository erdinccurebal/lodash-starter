const _ = require('lodash');

_.gte(3, 1);
// => true
 
_.gte(3, 3);
// => true
 
_.gte(1, 3);
// => false

// gte - Birinci verinin ikinci veriden küçük veya eşit olup olmadığını kontrol eder, küçükse false, büyükse veya eşitse true.
