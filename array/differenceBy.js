const _ = require('lodash');

const array = [5.2, 55.2, 31.1];

const cikart = [31.5, 22,1, 2,2];

const edit = _.differenceBy(array,cikart, Math.floor);

console.log(edit);

// DifferenceBy - İlk parametre olan array'in içerisinden , ikinci paremetre olan array'deki objeler çıkarılır, üçüncü parametrede fonksiyon uygulanır.