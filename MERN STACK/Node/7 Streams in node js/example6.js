// example showing the concept of streams
var fs = require('fs');
var path = 'myFolder/myFile1.txt';
var content = "Data is going to be overwrite";
const writeContent = ()=>{
    // writeStream = fs.createWriteStream(path);
    writeStream = fs.createWriteStream(path,{flags:'a'});
    writeStream.write(content);
    console.log("Data inserted successfully");   
}
if(fs.existsSync(path)){
    console.log('Already Exist');
    writeContent();
}
else{
    console.log("File is going to be create");
    writeContent();
}
writeStream.close();
writeStream.on('finish',()=>{
    console.log("Data inserted completely");
});
