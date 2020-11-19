const _ = require('lodash');

var say = _.spread(function (who, what) {
    return who + ' says ' + what;
});

say(['fred', 'hello']);
// => 'fred says hello'

var numbers = Promise.all([
    Promise.resolve(40),
    Promise.resolve(36)
]);

numbers.then(_.spread(function (x, y) {
    return x + y;
}));
// => a Promise of 76

// spread - Girilen dizin değerleri sıraya göre yerine yerleştirip işleme sokar.