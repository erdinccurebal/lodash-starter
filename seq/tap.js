const _ = require('lodash');

const xxx = _([1, 2, 3])
    .tap((array) => {
        // Mutate input array.
        array.pop();
    })
    .reverse()
    .value();
// => [2, 1]

console.log(xxx);

// tap - Veriye işlem uygulanabilecek alan acar.