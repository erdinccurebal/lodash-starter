const _ = require('lodash');

var array = [1, 2];
var wrapped = _(array).push(3);
 
console.log(array);
// => [1, 2]
 
wrapped = wrapped.commit();
console.log(array);
// => [1, 2, 3]
 
wrapped.last();
// => 3
 
console.log(array);
// => [1, 2, 3]

// prototypeCommit - Lodash fonksiyonu yapılan ve pipe'a sokulan işlemlerin, tamamlanmasını tetikler.