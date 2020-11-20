const _ = require('lodash');

function Foo() {
    this.a = _.constant('a');
    this.b = _.constant('b');
  }
   
  Foo.prototype.c = _.constant('c');

  _.functions(new Foo);
  // => ['a', 'b']

// functions - Fonksiyonları birleştirir. Dışardan prototype almaz.