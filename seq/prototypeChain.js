const _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 }
];

// A sequence without explicit chaining.
_(users).head();
// => { 'user': 'barney', 'age': 36 }

// A sequence with explicit chaining.
_(users)
    .chain()
    .head()
    .pick('user')
    .value();
  // => { 'user': 'barney' }

// prototypeChain - Method uygulanabilir hale getirir.