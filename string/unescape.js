const _ = require('lodash');

const result = _.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'

console.log(result);

// unescape - Özel karakterli yazıları normale çevirir.