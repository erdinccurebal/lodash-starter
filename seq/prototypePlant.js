const _ = require('lodash');

function square(n) {
    return n * n;
}

var wrapped = _([2, 2]).map(square);
// => [1, 4]

var other = wrapped.plant([2, 4]);
const write = other.value();
// => [9, 16]

wrapped.value();
// => [1, 4]

console.log(write);

// prototypePlant - Dizin içindeki sayıları karelerini alır.

