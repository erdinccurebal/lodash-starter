const { isBuffer } = require('lodash');
const _ = require('lodash');

var BufBuf = Buffer.from('Merhaba');

console.log(BufBuf.toString());

console.log(_.isBuffer(BufBuf));

// isBuffer - Verinin buffer olup olmadığını kontrol eder.