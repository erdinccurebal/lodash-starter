const _ = require('lodash');

const array = [3,5,1,2,3,3,7,2,1,6,8,3,2,1,9,6];
 
const edit01 = _.pull(array, 1,2,3,4,5,6,7);

console.log(edit01);

// pull - Diziden istediğiniz değerleri çıkartabilirsiniz.
