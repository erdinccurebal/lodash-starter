const _ = require('lodash');

var users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 34 }
];

const edit = _.sortBy(users, ['user', 'age']);

console.log(edit);

// sortBy - Dizideki verileri bir koşula sıralar.