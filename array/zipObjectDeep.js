const _ = require('lodash');

const edit01 = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);

const edit02 = _.zipObjectDeep(['yas[0].ahmet', 'yas[1].mehmet', 'yas[2].osman'], [20, 55, 42]);

const edit01_print = {
    'a':
    {
        'b': [
            { 'c': 1 }, { 'd': 2 }
        ]
    }
}

const edit02_print = {
    'yas': [ { ahmet: 20 }, { mehmet: 55 }, { osman: 42 } ]
}

console.table(edit02);

// zipObjectDeep - Dizilerle iç içe objeler oluşturma fonksiyonu.