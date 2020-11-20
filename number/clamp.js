const _ = require('lodash');


_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5

// clamp - Verilen değerler arasındaki değeri bulur.