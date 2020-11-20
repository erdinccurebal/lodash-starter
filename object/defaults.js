const _ = require('lodash');

_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }

// defaults - Obje içerisinde belirtilen değerlerden aynı properties' sahip olanlardan varsayılan olarak ilkini alır.