const _ = require('lodash');

var flipped = _.flip(function() {
    return _.toArray(arguments);
});
   
console.log(flipped('a', 'b', 'c', 'd'));

// flip - Birden fazla veri girmenizi sağlar.