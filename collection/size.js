const _ = require('lodash');

const edit01 = _.size('pebbles');
const edit02 = _.size([1, 2, 3]);
const edit03 = _.size({ 'a': 1, 'b': 2 });

console.log(edit01, edit02, edit03);

// size - Verinin uzunluğunu yazar.