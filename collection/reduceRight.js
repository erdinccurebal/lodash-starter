const _ = require('lodash');

var array = [[0, 1], [2, 3], [4, 5]];
 
const edit = _.reduceRight(array, function(flattened, other) {
    console.log(flattened);
    console.log(other)
  return flattened.concat(other);
}, []);

console.log(edit);

// reduceRight - Dizinin içindeki verileri birleştirir.Sondan birleştirir.
