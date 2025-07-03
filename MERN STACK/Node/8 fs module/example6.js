// example showing the concept of fs module

var fs = require('fs');
var fileName = new Date().getTime()+'_file.txt';
var data = "This is an example of File System in node js of "+fileName+" file";

fs.writeFile(fileName,data,(error)=>{
    if(error){
        console.log("Error : ",error);
    }
    else
        console.log("Data Inserted successfully");
});

