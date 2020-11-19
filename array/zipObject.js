const _ = require('lodash');

const edit = _.zipObject(['a', 'b'], [1, 2]);

console.log(edit);

// zipObject - Dizinin içerindeki dizilerden aynı sıradaki değerleri birleştirir ve tek bir obje oluşturur.