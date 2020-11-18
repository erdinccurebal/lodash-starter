const _ = require('lodash');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
const edit01 = _.intersectionWith(objects, others, _.isEqual);

console.log(edit01);

// intersectionWith - Dizideki değerlerin eşit olanı bulup diğerlerini siler.
