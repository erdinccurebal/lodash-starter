const _ = require('lodash');

const edit = _.flatten([1, [2, [3, [4]], 5]]);

console.log(edit);

// flatten - Dizideki bozukluğu düzeltir.