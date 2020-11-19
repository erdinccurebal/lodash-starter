const _ = require('lodash');

const zipped = _.zip(['a', 'b'], [1, 2, 3], [true, false]);

const unzip = _.unzip(zipped);

console.log(zipped);
console.log(unzip);

// unzip - Zip cözer, zipi eski haline getirir.