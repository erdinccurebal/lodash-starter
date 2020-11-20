const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;
   
  _.forOwn(new Foo, function(value, key) {
    console.log(key);
  });

// forOwn - Fonksiyonun prototype'larının isimlerini tek tek yazdırır. Dışarıdan alınan prototype'ları dönmez. Sadece fonksiyon içerisindeki prototype'ları döner.