const _ = require('lodash');
 
const edit = _.without([2, 1, 2, 3], 1, 2);

console.log(edit);

// without - Dizideki belirtilen değerleri siler.