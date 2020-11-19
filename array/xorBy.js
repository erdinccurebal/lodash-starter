const _ = require('lodash');
 
const edit = _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);

console.log(edit);

// xorBy - Birden fazla dizi girilir ve dizilerdeki aynı değerleri fonksiyon kullanarak siler ve tek bir dizin oluşturur.