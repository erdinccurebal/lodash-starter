const _ = require('lodash');

_.forEachRight([1, 2], (value) => {
    console.log(value);
});

// forEachRight - Dizinin length kadar, tek tek verileri döngüye sokar. Döngüyü sondan başa yapar.
