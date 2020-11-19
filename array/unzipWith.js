const _ = require('lodash');

var zipped = _.zip([1, 2], [10, 20], [100, 200]);
 
const edit = _.unzipWith(zipped, _.add);

console.log(edit);

// unzipWith - Dizideki aynı anlama gelen değerleri verilen koşula göre işleme sokar.