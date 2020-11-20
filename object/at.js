const _ = require('lodash');

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]

// at - Obje içerisindeki verileri index numarasına göre çeker ve bir array içerisinde birleştirir.