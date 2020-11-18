const _ = require('lodash');

const edit01 = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);

console.log(edit01);

// intersectionBy - Dizideki aynı değerleri bir fonksiyonla işleme koyup, aynı değerleri silebilirsiniz.
