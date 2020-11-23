const _ = require('lodash');

_.trimStart('  abc  ');
// => 'abc   '

const result = _.trimStart('-_-abc-_-', '_-');
// => '-_-abc'

console.log(result);

// trimStart - Solundaki boşlukları veya belirlenen yazıyı siler.