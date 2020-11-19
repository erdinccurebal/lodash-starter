const _ = require('lodash');

const edit01 = _.unionBy([2.1], [1.2, 2.3], Math.floor);

console.log(edit01);

// unionBy - Dizideki aynı değerleri fonksiyon uygulayarak siler.