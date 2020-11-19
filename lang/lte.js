const _ = require('lodash');

_.lte(1, 3);
// => true
 
_.lte(3, 3);
// => true
 
_.lte(3, 1);
// => false

// lte - Birinci verinin ikinci veriden büyük veya eşit olup olmadığını kontrol eder, büyükse false, küçük veya eşitse true