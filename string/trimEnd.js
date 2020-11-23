const _ = require('lodash');

_.trimEnd('  abc  ');
// => '  abc'

const result = _.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'

console.log(result);

// trimEnd - Solundaki boşlukları silin.