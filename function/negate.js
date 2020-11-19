const _ = require('lodash');

function isEven(n) {
    return n % 2 == 0;
}

var edit = _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));

console.log(edit);

// negate - Fonksiyonun tersini yapar.