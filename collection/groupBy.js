const _ = require('lodash');

const edit = _.groupBy([6.1, 4.2, 6.3], Math.floor);

console.log(edit);

// groupBy - Dizinin içersindeki verileri koşula göre objeler haline getirir.
