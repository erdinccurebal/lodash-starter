const _ = require('lodash');

var array = [1, 2, 3];

_(array).reverse().value()
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]

// prototypeReverse - Verileri testden yazdırır.