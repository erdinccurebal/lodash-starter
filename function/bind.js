const _ = require('lodash');

function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
}

var object = { 'user': 'fred' };

const edit01 = _.bind(greet, object, 'hi');

const edit02 = _.bind(greet, object, _, '!');

console.log(edit01('!'), edit02('hi'));

// bind - Bir fonksiyona bağlı kalarak objenin içersindeki veriyi çekerek başına ve sonuna işlemler uygulayabilirsiniz.