const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.toPairsIn(new Foo);
  // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)

// toPairsIn - Protipleri dizin içersinde yazdırır.