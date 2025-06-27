// example showing the concept of streams
var fs = require('fs');
var path1 = 'myFolder/myFile.txt';
var path2 = 'myFolder/myFileNew.txt';

const readStream = fs.createReadStream(path1);
const writeStream = fs.createWriteStream(path2);

readStream.pipe(writeStream);

