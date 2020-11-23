const _ = require('lodash');

_.transform([2, 3, 4], function (result, n) {
    result.push(n *= n);
    return n % 2 == 0;
}, []);
// => [4, 9]

_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
}, {});
  // => { '1': ['a', 'c'], '2': ['b'] }

// transform - Veriyi istediğiniz kosulda bir fonksiyona bağlı kalarak değiştirir.