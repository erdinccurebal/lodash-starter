const _ = require('lodash');

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

const edit01 = _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });

console.log(edit01);

// takeRightWhile - Dizideki yazılan değere göre sondan başlayarak değeri alır.