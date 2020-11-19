const _ = require('lodash');

var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
  ];

const edit = _.some(users, { 'user': 'barney', 'active': true });

console.log(edit);

// some - Verinin aynı olduğunu kontrol eder, true veya false döner.