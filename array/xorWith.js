const _ = require('lodash');
 
const edit = _.xorWith(objects, others, _.isEqual);

console.log(edit);

// xorWith - Birden fazla dizi girilir ve dizilerdeki aynı değerleri koşul kullanarak siler ve tek bir dizin oluşturur.