const _ = require('lodash');

_.truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'

const result = _.truncate('hi-diddly-ho there, neighborino', {
    'omission': ' [...]'
  });
  // => 'hi-diddly-ho there, neig [...]'

console.log(result);

// truncate - Büyük parça metinleri sınırlar veya üç nokta koyar.