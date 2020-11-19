const _ = require('lodash');

function square(n) {
    return n * n;
}

const edit = _.map({ 'a': 4, 'b': 8 }, square);

console.log(edit);

// map - Obje elamanlarına fonksiyondaki işlemi uygular ve diziye dönüştürür.

