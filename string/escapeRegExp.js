const _ = require('lodash');

const result = _.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'

console.log(result);

// escapeRegExp - Veriyi regExp ile parçalar.