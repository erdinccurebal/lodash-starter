const _ = require('lodash');
 
const result = _.split('a-b-c', '-', 2);
// => ['a', 'b']

console.log(result);

// split - Yazıyı parçalar ve array haline getirir, 1 parametre yazı, 2 parametre nereden parçalanacağı, 3 parametrede kaç tanesi alınacağı.