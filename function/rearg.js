const _ = require('lodash');

var rearged = _.rearg(function (a, b, c) {
    return [a, b, c];
}, [2, 0, 1]);

rearged('b', 'c', 'a')
// => ['a', 'b', 'c']

// rearg - Index yerlerini değiştirir.