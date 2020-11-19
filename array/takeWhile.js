const _ = require('lodash');

var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

const edit01 = _.takeWhile(users, { 'user': 'barney', 'active': true });

console.log(edit01);

// takeWhile - Dizideki yazılan değere göre baştan başlayarak değeri alır.