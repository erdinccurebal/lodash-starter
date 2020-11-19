const _ = require('lodash');

function fonksiyon(n) {
    return n + 2;
  }

const edit01 = _.flatMap([1, 2], fonksiyon);


console.log(edit01);

// flatMap - Oluşturulan fonksiyonun işlemine dizideki tüm elemanlara tek tek uygular. 