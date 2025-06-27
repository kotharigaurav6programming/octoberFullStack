// example showing the concept of streams
var fs = require('fs');
var path = 'myFolder/myFile.txt';

const obj = {
    username:"Andrew Anderson",
    email:"andrew@gmail.com",
    address : {
        state:"MP",
        country:"India"
    },
    pincode:452010
}

const writeStream = fs.createWriteStream(path);
writeStream.write(JSON.stringify(obj));
writeStream.close();
writeStream.on('finish',()=>{
    console.log("Data inserted in a file");
});