const _ = require('lodash');

const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }, { 'x': 3, 'y': 4 } ];
 
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);

console.log(array);

// pullAllWith - Girilen değer dizi olmalıdır, aynı değerleri siler.
