// var obj = require('./module6.js');
// console.log("name : "+obj.name);
// console.log("age : "+obj.age);

var {name,age} = require('./module6.js');
// named import
console.log("name : "+name);
console.log("age : "+age);
