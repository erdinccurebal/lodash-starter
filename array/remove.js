const _ = require('lodash');

var array = [1, 2, 3, 4];
var evens = _.remove(array, (n) => {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]

// remove - Fonksiyon ile veriyi filtreleyip silebilirsiniz.
