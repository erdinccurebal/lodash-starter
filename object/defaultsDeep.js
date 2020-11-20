const _ = require('lodash');

_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }

// defaultsDeep - Obje içerisinde belirtilen değerlerden aynı properties'e sahip olanların içeriğinde ilkinde olmayanlar varsa diğer propertiesleridekileri de ilkine alır.