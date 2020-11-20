const _ = require('lodash');_

.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
    return key + value;
  });
  // => { 'a1': 1, 'b2': 2 }

// mapKeys - Objenin içersindeki properties isimlerini tek tek düzenler.