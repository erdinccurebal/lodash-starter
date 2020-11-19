const { curry } = require('lodash');
const _ = require('lodash');

var abc = function(name, yas) {
    return name + ' ' + yas;
  };
   
var edit01 = _.curryRight(abc);


console.log(edit01(5)('ahmed'));

// curryRight - Fonksiyonun parentez girilebilecek hale getirir. Eksik veya fazla veri girişinde hata verir. Fonksiyonlar tersden yazılır.