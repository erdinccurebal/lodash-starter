const _ = require('lodash');

const edit01 = _.indexOf([1, 5,2, 1, 2, 2, 5], 2);

const edit02 = _.indexOf([1, 5,2, 1, 2, 2, 5], 5, 2);

console.log(edit01);

console.log(edit02);

// indexOf - Birinci örnek dizideki değerin kaçıncı index'de olduğunu gösterir.
// 2. örnekte ise fazladan bir değer daha alır ve bu değerde birden fazla aynı index varsa atlama yapar.
