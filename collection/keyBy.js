const _ = require('lodash');

var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

const edit = _.keyBy(array, 'dir');

console.log(edit);
// { left: { dir: 'left', code: 97 }, right: { dir: 'right', code: 100 } }

// keyBy - Dizinin içersindeki bir tane veriyi alarak dizideki objeleri düzenler.

