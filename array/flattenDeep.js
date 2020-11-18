const _ = require('lodash');

const edit = _.flattenDeep([1, [2, [3, [4]], 5]]);

console.log(edit);

// flattenDeep - Dizinin içindeki dizileri siler ve diziyi tek bir dizi haline getirir.