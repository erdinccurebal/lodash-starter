const _ = require('lodash');

function duplicate(n) {
    return [[[n, n]]];
}

const edit01 = _.flatMapDepth([1, 2], duplicate, 1);

console.log(edit01);

// flatMapDeep - Oluşturulan fonksiyonun işlemine dizideki tüm elemanlara tek tek uygular. Girilen değer kadar dışarıdan dizi siler.