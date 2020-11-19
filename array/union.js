const _ = require('lodash');

const edit01 = _.union([2], [2, 1], [3]);

console.log(edit01);

// union - Dizideki aynı değerleri siler.