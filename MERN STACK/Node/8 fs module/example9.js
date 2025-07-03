// example showing the concept of fs module

var fs = require('fs');
var fileName = "file.txt";

console.log("Before Calling");
const data = fs.readFileSync(fileName,'utf-8');
console.log("Data : "+data);
console.log("After Calling");

