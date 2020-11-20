const _ = require('lodash');

var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }
 
_.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }

// invertBy - Obje içerisindeki verileri sağdan itibaren properties değer, değerleri properties yapar ve soldaki aynı veriyi siler. Aynı verileri array içerisinde birleştirir.