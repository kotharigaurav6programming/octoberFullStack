// example showing the concept of streams
var fs = require('fs');
var path = 'myFolder/myFile.txt';

readStream = fs.createReadStream(path,"utf-8");
readStream.on('data',(chunk)=>{
    // console.log(chunk);
    // console.log(""+chunk);
    // console.log(chunk.toString());
    console.log(chunk);
});

readStream.on('end',()=>{
    console.log("Data reading finish");
});

readStream.on('error',()=>{
    console.log("Error while reading data");
});