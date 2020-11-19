const _ = require('lodash');

const objects = [{ 'x': 4 }, { 'x': 5 }];
 
const edit01 = _.sortedIndexBy(objects, { 'x': 1 }, 'x');

console.log(edit01);

// sortedIndexBy - Dizinin içindeki değere göre index araması yapılarak objenin indexi bulunur.