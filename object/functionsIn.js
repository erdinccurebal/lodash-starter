const _ = require('lodash');

function Foo() {
    this.a = _.constant('a');
    this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functionsIn(new Foo);
  // => ['a', 'b', 'c']

// functionsIn - Fonksiyonları birleştirir. Dışardan prototype alır.