const _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
  ];
   

const edit = _.reject(users, { 'age': 40, 'active': true });

console.log(edit);

// reject - Dizinin içersindeki objenin verisine göre silme işlemi yapar.