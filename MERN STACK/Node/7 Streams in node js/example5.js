// example showing the concept of streams

var fs = require('fs');
var path = 'myFolder/myFile.txt';
if(fs.existsSync(path))
    console.log('Already Exist');
else{
    fs.createWriteStream(path);
    console.log("File created successfully");
}
