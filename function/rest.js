const _ = require('lodash');


var say = _.rest(function (what, names) {
    return what + ' ' + _.initial(names).join(', ') +
        (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});

say('hello', 'fred', 'barney', 'pebbles');
  // => 'hello fred, barney, & pebbles'

// rest - Bu fonksiyon herhangi bir fonksiyona uygulanarak girilen değer ve string'ler işlem uygulanır.