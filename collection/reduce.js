const _ = require('lodash');

const edit = _.reduce([2, 5, 5, 5], function (a, b) {
    console.log(a)
    console.log(b)
    return a + b;
}, 2);

// reduce - Dizinin içindeki verileri toplamaya yarar.

