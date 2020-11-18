const _ = require('lodash');

const array = ['a', true , false];

const cikart = ['a','c','b'];

const edit = _.difference(array,cikart);

console.log(edit);

// difference - İlk parametre olan array'in içerisinden , ikinci paremetre olan array'deki objeler çıkarılır.