const _ = require('lodash');

var wrapped = _([1, 2]);

console.log(1, wrapped);

wrapped.next();

console.log(2, wrapped);

wrapped.next();

console.log(3, wrapped);

// prototypeNext - Lodash verisini values için hazır eder.