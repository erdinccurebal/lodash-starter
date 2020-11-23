const _ = require('lodash');

_.parseInt('08');
// => 8

const aaa = _.map(['6', '08', '10'], _.parseInt);
// => [6, 8, 10]

console.log(aaa);

// parseInt - Veriyi integer türüne çevirir.