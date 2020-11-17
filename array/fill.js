const _ = require('lodash');

const array = [1, 2, 3];

const edit = _.fill(array, 'a');

console.log(edit);

// ----------------------------------------------------------------

const array02 = [4,6,7,9,4];

const edit02 = _.fill(array02, '*', 0, 3);

console.log(edit02);

// Fill - Array içindeki tüm değerleri, verilen değer ile değiştirir.