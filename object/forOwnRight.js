const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;
   
  _.forOwnRight(new Foo, function(value, key) {
    console.log(key);
  });

// forOwnRight - Fonksiyonun prototype'larının isimlerini sondan tek tek yazdırır. Dışarıdan alınan prototype'ları dönmez. Sadece fonksiyon içerisindeki prototype'ları döner.