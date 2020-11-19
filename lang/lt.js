const _ = require('lodash');

_.lt(1, 3);
// => true
 
_.lt(3, 3);
// => false
 
_.lt(3, 1);
// => false

// lt - Birinci verinin ikinci veriden büyük olup olmadığını kontrol eder, büyükse false, küçükse true