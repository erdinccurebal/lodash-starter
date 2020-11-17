const _ = require('lodash');

var users = [
    { 'user': 'erdinc', 'active': false },
    { 'user': 'merve', 'active': true },
    { 'user': 'nurcan', 'active': false },
    { 'user': 'nihal', 'active': true }
];

const edit = _.findIndex(users, { 'user': 'merve', 'active': true });

console.log(edit);

// FindIndex - Dizinin içindeki koşula göre baştan başlayarak indexi yakalar.