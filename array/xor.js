const _ = require('lodash');
 
const edit = _.xor([2, 1], [2, 3], [4, 3]);

console.log(edit);

// xor - Birden fazla dizi girilir ve dizilerdeki aynı değerleri siler ve tek bir dizin oluşturur.