const _ = require('lodash');

function abc() {
    console.log('asdsa')
}

const test01 = _.isNil(null);

const test02 = _.isNil(abc()); // Void

const test03 = _.isNil(NaN);

console.log(test01, test02, test03);

// isNil - Bir veri girdisi varsa veya bir fonksiyon geriye veri dönüyorsa false'dur.