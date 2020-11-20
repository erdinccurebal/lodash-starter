const _ = require('lodash');

var users = {
    'fred': { 'user': 'fred', 'age': 40 },
    'pebbles': { 'user': 'pebbles', 'age': 1 }
};

_.mapValues(users, function (o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// The `_.property` iteratee shorthand.
_.mapValues(users, 'age');
  // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// mapValues - Objedeki verileri daha kısıtlanmış hale getirir.