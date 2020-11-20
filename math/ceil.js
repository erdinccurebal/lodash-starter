const _ = require('lodash');

_.ceil(4.006);
// => 5
 
_.ceil(6, 2);
// => 6.01
 
_.ceil(6040, -2);
// => 6100

const result = _.ceil(6040, -3);
// => 10

console.log(result);
//  ceil - Değeri yukarı yuvarlar. Tam sayı ise girilen sayı kadar sola ilerler ve basamağı kendi basamak değerinde yukarı yuvarlar. Virgüllü sayı ise girilen değer kadar sola ilerler ve o basamaktan itibaren yukarı yuvarlar.