const _ = require('lodash');

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(objects === deep);
console.log( );
// => false

// cloneDeep - Clone verisi ile orjinal birbirine eşit olsada bu fonksiyonla ayırt edebilirsiniz.
