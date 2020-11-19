const _ = require('lodash');

function greet(greeting, name) {
    return greeting + ' ' + name;
  }
   
  var greetFred = _.partialRight(greet, 'fred');
  greetFred('hi');
  // => 'hi fred'
   
  // Partially applied with placeholders.
  var sayHelloTo = _.partialRight(greet, 'hello', _);
  sayHelloTo('fred');
  // => 'hello fred'

// partialRight - Girilen değeri fonksiyon ile işleme sokarak yazdırır. Partial'da girilen koşullar tersden yazılır.