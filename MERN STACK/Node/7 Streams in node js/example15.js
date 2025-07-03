// example showing the concept of transform stream

var fs = require('fs');
var zlib = require('zlib');
var zlibObj = zlib.createGzip();

const pathName = 'myFolder/myFile.txt';
const targetPathName = 'myFolder/myFile.zip';

const readStream = fs.createReadStream(pathName);
const writeStream = fs.createWriteStream(targetPathName);

readStream.pipe(zlibObj).pipe(writeStream);
console.log("Zip file created");
