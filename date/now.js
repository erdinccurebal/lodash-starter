const _ = require('lodash');

_.defer(function (stamp) {
    console.log(_.now() - stamp);
}, _.now());

// now - ?