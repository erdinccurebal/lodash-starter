const _ = require('lodash');

var object = {};
 
_.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }

// updateWith - Objedeki bir veriyi günceller. Parametre olarak dışarıdan bir tane değiştirilecek objeyi alır, ikinci parametrede eklenecek objenin konumunu belirler, üçüncü parametrede fonksiyondan dönen veriyi objeye ekler. Dördüncü parametrede ise objenin türünü belirler.