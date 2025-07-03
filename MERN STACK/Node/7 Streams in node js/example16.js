// example showing the concept of transform stream

var fs = require('fs');
var zlib = require('zlib');
var zlibObj = zlib.createGunzip();

const pathName = 'myFolder/newMyFile.txt';
const targetPathName = 'myFolder/myFile.zip';

const readStream = fs.createReadStream(targetPathName);
const writeStream = fs.createWriteStream(pathName);

readStream.pipe(zlibObj).pipe(writeStream);
console.log("UnZip successfull");
