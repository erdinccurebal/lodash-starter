const _ = require('lodash');

var objects = [{ 'n': 1 }, { 'n': 2 }];
 
_.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }
 
// The `_.property` iteratee shorthand.
_.maxBy(objects, 'n');
// => { 'n': 2 }

// maxBy - Dizinin içindeki objelerin en büyüğünü fonksiyon kullanarak bulur.