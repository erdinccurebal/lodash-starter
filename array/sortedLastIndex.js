const _ = require('lodash');
 
const edit01 = _.sortedLastIndex([4, 5, 5, 5, 6], 5);

console.log(edit01);

// sortedIndexBy - Dizinin index araması sondan başa yapar. 0 dan başlamaz, 1 den başlıyarak sayar.