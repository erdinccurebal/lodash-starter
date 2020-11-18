const _ = require('lodash');


const disindaki = 10;

const array = [disindaki, 55.2, 3.5];

const edit1 = _.differenceWith(array, [disindaki], _.isEqual)

const edit2 = _.differenceWith(array, [10], _.isEqual)

console.log(edit1 + "\n" + edit2);


// differenceWith - Array içinde belirtilen herhangi bir değer veya arrayin dışındakileri yazdırır.