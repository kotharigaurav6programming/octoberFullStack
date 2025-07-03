// example showing the concept of fs module

var fs = require('fs');
var fileName = new Date().getTime()+'_file.txt';
var data = "This is an example of File System in node js of "+fileName+" file";
var recordDataFile = "record.txt";

fs.writeFileSync(fileName,data);
fs.appendFileSync(recordDataFile,fileName+"\n");
console.log("Entry of created file successfull");


