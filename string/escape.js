const _ = require('lodash');

const result = _.escape('fred, > / barney, & pebbles');
// => 'fred, barney, &amp; pebbles'

console.log(result);

// escape - Özel karakterlerin kodlarını yazar.