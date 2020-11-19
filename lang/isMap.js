const _ = require('lodash');

const test01 = new Map();

test01.set(5,'deneme');
test01.set(6,(d) => {
    return d;
});
 
const test02 = _.isMap(new WeakMap);
// False

console.log(test01.get(6)(5), _.isMap(test01));

// isMap - Verinin map formatında olup olmadığını kontrol eder.