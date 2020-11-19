const _ = require('lodash');


function test() {
    console.log('Function debounced after 1000ms!');
}

var debounce_fun = _.debounce(test, 1000);


setInterval(() => {
    debounce_fun();
},998);


// debounce - Fonksiyona yapılan art arda istekleri sınırlar.