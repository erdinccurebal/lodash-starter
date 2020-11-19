const _ = require('lodash');

const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
const edit01 = _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');

console.log(edit01);

// pullAllBy - Dizideki objelerin içindeki tanımlarına göre verileri temizleyebilirsiniz.
