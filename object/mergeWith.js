const _ = require('lodash');

function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }
   
  var object = { 'a': [1], 'b': [2] };
  var other = { 'a': [3], 'b': [4] };
   
  _.mergeWith(object, other, customizer);
  // => { 'a': [1, 3], 'b': [2, 4] }

// merge - İki objeyi birleştirir ve fonksiyona sokulabilir.