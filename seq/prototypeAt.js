const _ = require('lodash');

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_(object).at(['a[0].b.c', 'a[1]']).value();
// => [3, 4]

// prototypeAt - Objenin icersindeki veriyi konuma göre çeker.
