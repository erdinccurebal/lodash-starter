const _ = require('lodash');

var users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];

const edit = _.orderBy(users, ['user', 'age'], ['asc', 'deasc']);

console.log(edit);

// orderBy - Dizilerin içersindeki verileri belirtilen koşulda sıralar.

