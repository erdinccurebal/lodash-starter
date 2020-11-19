const _ = require('lodash');

const edit = _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');

console.log(edit);

// invokeMap - Dizilerin içersindeki değerleri sıralar.
