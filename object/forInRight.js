const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
    this.d = 4;
}

Foo.prototype.c = 3;
Foo.prototype.f = 7;


_.forInRight(new Foo, function (value, key) {
    console.log(key);
});

// forInRight - Fonksiyonun prototype'larını isimlerini sondan tek tek yazdırır.