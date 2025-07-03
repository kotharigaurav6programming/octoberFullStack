// example showing the concept of fs module

var fs = require('fs');
var fileName = 'newMyFile.txt';
console.log("Before Open");

fs.readFile(fileName,'utf-8',(error,data)=>{
    if(error){
        console.log("Error : ",error);
    }
    else
        console.log(data);
});

console.log("After Open");
