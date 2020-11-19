const _ = require('lodash');

var throt_fun = _.throttle(function () { 
    console.log('Function throttled after 1000ms!'); 
}, 1000); 

throt_fun();

// throttle - Fonksiyon uygulandıktan sonra geçikmeye girer. Fark olan burada fonksiyon çalışmadan değil, çalıştıkdan sonra devreye girmesidir.