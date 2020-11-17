const _ = require('lodash');

var users = [
    { 'user': 'erdinc', 'active': false },
    { 'user': 'nurcan', 'active': true },
    { 'user': 'merve', 'active': false },
    { 'user': 'nihal', 'active': true }
];

const edit = _.findLastIndex(users, { 'user': 'nihal', 'active': true });

console.log(edit);

// FindLastIndex - Dizinin içindeki koşula göre sondan? başlayarak indexi yakalar.