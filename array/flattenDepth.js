const _ = require('lodash');

const array = [1, [2, [3, [4]], 5]];

const edit = _.flattenDepth(array, 3);

console.log(edit);

// flattenDepth - Dizinin dıştan içe doğru iç dizilerini verilen indis değerine kadar siler.