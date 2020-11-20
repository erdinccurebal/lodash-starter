const _ = require('lodash');

const obje = {
    name: 'erdinc',
    yas: 12
};

const yeniObje = _.assign(obje,{a:'asdas'})

console.log(yeniObje);

// assign - Objeleri birleştirir veya belirli bir objeye veri ekler.