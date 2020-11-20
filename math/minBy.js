const _ = require('lodash');

var objects = [{ 'n': 1 }, { 'n': 2 }];
 
_.minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }
 
// The `_.property` iteratee shorthand.
_.minBy(objects, 'n');
// => { 'n': 1 }

// minBy - Dizinin içindeki objelerin en küçüğünü fonksiyon kullanarak bulur.