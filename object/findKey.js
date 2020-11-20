const _ = require('lodash');

var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };
   
  _.findKey(users, function(o) { return o.age < 40; });
  // => 'barney' (iteration order is not guaranteed)
   
  // The `_.matches` iteratee shorthand.
  _.findKey(users, { 'age': 1, 'active': true });
  // => 'pebbles'
   
  // The `_.matchesProperty` iteratee shorthand.
  _.findKey(users, ['active', false]);
  // => 'fred'
   
  // The `_.property` iteratee shorthand.
  _.findKey(users, 'active');
  // => 'barney'

// findKey - Verilen koşula göre fonksiyona bağlı kalarak objenin içerisindeki koşula en yakın bir tane veriyi bulur.