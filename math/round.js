const _ = require('lodash');

_.round(4.006);
// => 4
 
_.round(4.006, 2);
// => 4.01
 
_.round(4060, -2);
// => 4100

// round - Değeri en yakın tam sayıya yuvarlar. Tam sayı ise girilen sayı kadar sola ilerler ve basamağı kendi basamak değerinde en yakın sayıya yuvarlar. Virgüllü sayı ise girilen değer kadar sola ilerler ve o basamaktan itibaren en yakın sayıya yuvarlar.