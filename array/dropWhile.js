const _ = require('lodash');

const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'mahmut',  'active': true },
    { 'user': 'pebbles', 'active': false }
  ];

const edit = _.dropWhile(users, ['user', 'barney']);

console.log(edit);

// DropWhile - Dizideki koşula göre soldan başlamak üzere koşulda ilk görülen veriyi siler.