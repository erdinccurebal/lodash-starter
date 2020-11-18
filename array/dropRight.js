const _ = require('lodash');

const edit = _.dropRight([1,2,3],1)

console.log(edit);

// dropRight - Dizideki verili sondan olmak üzere girilen değer kadar siler. Varsayılan 1.