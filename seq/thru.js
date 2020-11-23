const _ = require('lodash');

const n = _('  abc  ')
 .chain()
 .trim()
 .thru(function(result) {
   return [result]
 })
 .thru(function(result) {
    return {hi : result}
  })
 .value();

console.log(n);

// thru - Herhangi bir veriyi istenilen pipe'a sokar.