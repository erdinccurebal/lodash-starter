const _ = require('lodash');

var object = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.hasIn(object, 'a');
// => true
 
_.hasIn(object, 'a.b');
// => true
 
_.hasIn(object, ['a', 'b']);
// => true
 
_.hasIn(object, 'b');
// => false

// hasIn - Propertiesin içerisindeki bahsedilen verinin varlığını kontrol eder.