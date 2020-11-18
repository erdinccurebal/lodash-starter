const _ = require('lodash');

const array01 = ['a', true , false];

const array02 = ['a','c'];

const array03 = ['c'];


const edit = _.concat(array01, 'hello', array02, array03);

console.log(edit);


// concat - Array'leri birleştirmeye yarar.