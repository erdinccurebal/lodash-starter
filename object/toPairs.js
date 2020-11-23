const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.toPairs(new Foo);
  // => [['a', 1], ['b', 2]] (iteration order is not guaranteed

// toPairs - Protipleri dizin içersinde yazdırır. Dışardan gelen prototipleri yazdırmaz.