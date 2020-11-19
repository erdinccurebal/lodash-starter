const _ = require('lodash');

const edit = _.map(['6', '8', '10'], _.ary(parseInt, 1));

console.log(edit);

// ary - Dizideki verilerin türünü değiştirmeye yarar.