const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;
   
  _.valuesIn(new Foo);
  // => [1, 2, 3] (iteration order is not guaranteed)

// valuesIn - Dışarıdan prototype alır.