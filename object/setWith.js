const _ = require('lodash');

var object = {};
 
_.setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } 


// setWith - Objenin içersindeki parametredeki konuma göre veri ekler. Koşulda eklenecek veri belirtilebilir.