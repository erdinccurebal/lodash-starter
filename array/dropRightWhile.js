const _ = require('lodash');

const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'mahmut',  'active': true },
    { 'user': 'pebbles', 'active': false }
  ];

const edit = _.dropRightWhile(users, ['user', 'pebbles']);

console.log(edit);

// dropRightWhile - Dizideki koşula göre sağdan başlamak üzere koşulda ilk görülen veriyi siler.