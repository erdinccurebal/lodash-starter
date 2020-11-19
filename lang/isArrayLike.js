const _ = require('lodash');

_.isArrayLike([1, 2, 3]);
// => true

_.isArrayLike(4949);
// => true
 
_.isArrayLike(_.noop);
// => false

console.log(_.isArrayLike(4848))

// isArrayLike - Fonksiyon, integer veya koşul ifadesi için false, string veya array ifadesi için true döner. Çünkü array'e benzeyenleri bulur.