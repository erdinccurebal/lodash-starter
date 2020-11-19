const { isDate } = require('lodash');
const _ = require('lodash');

const tarih = new Date(Date.now());

console.log(_.isDate(tarih));

// isDate - Verinin tarih olup olmadığını kontrol eder.