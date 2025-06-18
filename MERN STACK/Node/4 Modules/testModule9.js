
var obj = require('./module9.js');
var res = obj.protocol("http://")+obj.domain("www.google.com");
console.log(res);