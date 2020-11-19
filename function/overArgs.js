const _ = require('lodash');

function doubled(n) {
    return n * 2;
}

function square(n) {
    return n * n;
}

var func = _.overArgs(function (x, y) {
    return [x, y];
}, [square, doubled]);

func(9, 3);
// => [81, 6]

func(10, 5);
// => [100, 10]

// overArgs - Fonksiyonları birleştirir. iki eklenen değerin, iki farklı fonksiyon uygulanır.