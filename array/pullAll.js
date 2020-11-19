const _ = require('lodash');

const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
const edit01 = _.pullAll(array, ['a', 'c']);

console.log(edit01);

// pullAll - Diziden istediğiniz değerleri çıkartabilirsiniz, değeri dizi halinde girmeniz gerekmektedir.
