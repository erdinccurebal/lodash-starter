const _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'barney', 'age': 40, 'active': false }
];

const edit01 = _.find(users, { 'age': 36, 'active': true });

console.log(edit01);

// find - Verilen koşullara göre liste içerisinde değere uygun olan objeyi getirir.