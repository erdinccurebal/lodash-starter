const _ = require('lodash');

var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }

// invert - Obje içerisindeki verileri sağdan itibaren properties değer, değerleri properties yapar ve soldaki aynı veriyi siler.