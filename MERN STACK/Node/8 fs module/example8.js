// example showing the concept of fs module

var fs = require('fs');
var fileName = "file.txt";
var data = " This is an example of File System in node js";

console.log("Before Calling");
fs.appendFileSync(fileName,data);
console.log("Data append successfully");
console.log("After Calling");

