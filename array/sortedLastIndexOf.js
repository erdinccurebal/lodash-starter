const _ = require('lodash');

const edit01 = _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);

console.log(edit01);

// sortedLastIndexOf - Dizideki index taramasını yapar sondan başa doğru, 0 dan başlar.