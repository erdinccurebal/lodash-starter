const _ = require('lodash');

const edit01 = _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);

console.log(edit01);

// sortedUniqBy - Dizideki benzer verileri fonksiyon uygulayarak çıkartır.