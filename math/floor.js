const _ = require('lodash');

_.floor(4.006);
// => 4
 
_.floor(0.046, 2);
// => 0.04
 
_.floor(4060, -2);
// => 4000

// floor - Değeri aşağı yuvarlar. Tam sayı ise girilen sayı kadar sola ilerler ve basamağı kendi basamak değerinde aşağı yuvarlar. Virgüllü sayı ise girilen değer kadar sola ilerler ve o basamaktan itibaren aşağı yuvarlar.