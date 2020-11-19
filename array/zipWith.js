const _ = require('lodash');

const edit = _.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
    return a + b + c;
});

console.log(edit);

// zipWith - Dizinin aynı sıradaki elemanlarını fonksiyon kullanarak belirli işleme sokar.