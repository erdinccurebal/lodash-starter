const _ = require('lodash');

const obje = {
    name: 'erdinc',
    yas: 12
};

_.assignIn(obje,{a:'asdas'})

console.log(obje);

// assignIn - Objeye veri ekler.