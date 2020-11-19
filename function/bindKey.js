const _ = require('lodash');

var object = {
    'user': 'fred',
    'greet': function(greeting, punctuation) {
      return greeting + ' ' + this.user + punctuation;
    }
  };

var edit01 = _.bindKey(object, 'greet', 'hi');


console.log(edit01('!'));

// bindKey - Objenin içersindeki bir fonksiyona bağlı kalarak objenin içersindeki veriyi çekerek başına ve sonuna işlemler uygulayabilirsiniz.