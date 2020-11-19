const _ = require('lodash');

function test() {
    console.log('test');
}

var initialize = _.once(test);
initialize();
initialize();
initialize();
initialize();
initialize();
initialize();

// once - Aynı fonksiyonun defalarca çalışmasını engeller.