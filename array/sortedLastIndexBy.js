const _ = require('lodash');
 
var objects = [{ 'x': 4 }, { 'x': 5 }];

const edit01 = _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });

console.log(edit01);

// sortedLastIndexBy - Dizideki objenin verisine göre sondan başa index taraması yapar.