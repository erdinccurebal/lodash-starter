const _ = require('lodash');

const array = ['a', true , 'b','c'];

const edit = _.chunk(array, 4);

console.log(edit);

// chunk - Array verilerin içine array açmaya ve ayırmaya yarar.