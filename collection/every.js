const _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'barney', 'age': 40, 'active': false }
];

const edit01 = _.every(users, { 'user': 'barney', 'active': false });

console.log(edit01);

// every - Verilen koşula göre liste içerisindeki tüm satırların doğru olup olmadığını, true ve false döner.