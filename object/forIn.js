const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
    this.d = 4;
}

Foo.prototype.c = 3;
Foo.prototype.f = 7;


_.forIn(new Foo, function (value, key) {
    console.log(key);
});

// forIn - Fonksiyonun prototype'larını isimlerini tek tek yazdırır.