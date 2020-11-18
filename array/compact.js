const _ = require('lodash');

const array = ['a', false , 'b','c', 0];

const edit = _.compact(array);

console.log(edit);

// compact - false, null, 0, "", undefined, NaN içeriklerini temizler.