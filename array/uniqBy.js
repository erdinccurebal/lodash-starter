const _ = require('lodash');

const edit01 = _.uniqBy([2.1, 1.2, 2.3], Math.floor);

console.log(edit01);

// uniqBy - Dizideki benzer verileri fonksiyon uygulayarak siler.