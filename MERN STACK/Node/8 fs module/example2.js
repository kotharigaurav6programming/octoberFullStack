// example showing the concept of fs module

var fs = require('fs');
var fileName = 'myFile1.txt';

console.log("Before Open");

fs.unlink(fileName,(error)=>{
    if(error){
        if(error.code==="ENOENT")
            console.log("fILE NOT EXIST");
        else 
            console.log("Error : ",error);
    }
    else
        console.log("File deleted successfully");
});

console.log("After Open");
