const _ = require('lodash');

var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];

const edit = _.partition(users, { 'age': 1, 'active': false });

console.log(edit);

// partition - Dizilerin içersindeki verileri belirtilen koşuldaki veriyi tüm verilerden ayırır, ayrı bir dizin oluşturur ikisinede.

