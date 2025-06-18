// var {userObj} = require('./module7.js');
// named import
// console.log("name : "+userObj.name);
// console.log("age : "+userObj.age);
// console.log("salary : "+userObj.salary);
// console.log("state : "+userObj.address.state);
// console.log("country : "+userObj.address.country);

var obj = require('./module7.js');
console.log("name : "+obj.userObj.name);
console.log("age : "+obj.userObj.age);
console.log("salary : "+obj.userObj.salary);
console.log("state : "+obj.userObj.address.state);
console.log("country : "+obj.userObj.address.country);