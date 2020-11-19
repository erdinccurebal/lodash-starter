const { curry } = require('lodash');
const _ = require('lodash');

var abc = function(name, yas) {
    return name + ' ' + yas;
  };
   
var edit01 = _.curry(abc);


console.log(edit01('ahmet')(55));

// curry - Fonksiyonun parentez girilebilecek hale getirir. Eksik veya fazla veri girişinde hata verir.