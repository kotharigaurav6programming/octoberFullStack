// example showing the concept of streams
var fs = require('fs');
var path = 'myFolder/myFile.txt';

const readStream = fs.createReadStream(path,"utf-8");
readStream.on('data',(chunk)=>{
    // console.log(typeof chunk);
    const obj = JSON.parse(chunk);
    console.log("Username : "+obj.username);
    console.log("Email : "+obj.email);
    console.log("State : "+obj.address.state);
    console.log("Country : "+obj.address.country);
    console.log("Pincode : "+obj.pincode);    
});