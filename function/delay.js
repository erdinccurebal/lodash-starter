const _ = require('lodash');

_.delay(function (text) {
    console.log(text);
}, 1000, 'later');

// delay - Fonksiyonun çalışmasını belirli bir süre geçiktirir.