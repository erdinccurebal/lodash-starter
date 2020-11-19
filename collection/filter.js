const _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'barney', 'age': 40, 'active': false }
];

const edit01 = _.filter(users, { 'age': 36, 'active': true });

console.log(edit01);

// filter - Verilen koşullara göre liste içerisinde değere uygun olan objeleri yansıtır.