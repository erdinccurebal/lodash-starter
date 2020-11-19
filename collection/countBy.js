const _ = require('lodash');

const edit01 = _.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }


const edit02 = _.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }

console.log(edit01);
console.log(edit02);

// countBy - Fonksiyon veya koşula bağlı kalarak dizi içerisindeki değerlerin miktarını yansıtır.