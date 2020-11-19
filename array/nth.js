const _ = require('lodash');

const array = ['a', 'b', 'c', 'd'];
 
const edit01 = _.nth(array, -1);

console.log(edit01);

// nth - Diziden index sayısını girerek veri cağrılabilir veya negatif sayılar girerek sondan başlayarak veride çağırılabilir.
