const _ = require('lodash');

var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };
   
  _.findLastKey(users, function(o) { return o.age < 40; });
  // => returns 'pebbles' assuming `_.findKey` returns 'barney'
   
  // The `_.matches` iteratee shorthand.
  _.findLastKey(users, { 'age': 36, 'active': true });
  // => 'barney'
   
  // The `_.matchesProperty` iteratee shorthand.
  _.findLastKey(users, ['active', false]);
  // => 'fred'
   
  // The `_.property` iteratee shorthand.
  _.findLastKey(users, 'active');
  // => 'pebbles'

// findLastKey - Verilen koşula göre fonksiyona bağlı kalarak objenin içerisindeki koşula en uzak bir tane veriyi veya sondaki veriyi bulur.