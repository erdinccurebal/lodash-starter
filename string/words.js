const _ = require('lodash');

const result = _.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']

console.log(result);

// words - Cümleyi parçalar. 2 parametre olarak regExp girilebilir.