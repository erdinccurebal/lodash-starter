const _ = require('lodash');

const zipped = _.zip(['a', 'b'], [5, 3], [false, true]);

const unzip = _.unzip(zipped);

console.log(zipped);
console.log(unzip);

// zip - Dizinin içerindeki dizilerden aynı sıradaki değerleri birleştirir ve tür sayısı kadar dizi oluşturur.