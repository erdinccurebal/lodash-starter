const _ = require('lodash');

function greet(greeting, name) {
    return greeting + ' ' + name;
}

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// Partially applied with placeholders.
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
  // => 'hi fred'

// partial - Girilen değeri fonksiyon ile işleme sokarak yazdırır.