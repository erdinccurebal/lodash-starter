const { toArray } = require('lodash');
const _ = require('lodash');


function testing() {


    return _.map(['6', '8', '10'], _.unary(toArray));

};

console.log(testing());
// unary - Dizideki içindeki değerlerin iç değerlerini değiştirir.