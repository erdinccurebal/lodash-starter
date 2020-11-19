const _ = require('lodash');

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

const edit01 = _.uniqWith(objects, _.isEqual);

console.log(edit01);

// uniqWith - Dizideki benzer objeleri koşul uygulayarak temizler.