const _ = require('lodash');

const veri = 'aaa';

const edit = _.isArguments(
    function () {
        return arguments;
    }(veri));

console.log(edit);

// isArguments - Fonksiyon herhangi bir veri alıyorsa true 'dur.