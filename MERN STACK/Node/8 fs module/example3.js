// example showing the concept of fs module

var fs = require('fs');
var oldFileName = 'myFile.txt';
var newFileName = 'newMyFile.txt';

console.log("Before Open");

fs.rename(oldFileName,newFileName,(error)=>{
    if(error){
        if(error.code==="ENOENT")
            console.log("fILE NOT EXIST");
        else 
            console.log("Error : ",error);
    }
    else
        console.log("File rename successfully");
});

console.log("After Open");
