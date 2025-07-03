// example showing the concept of fs module

var fs = require('fs');
var fileName = 'newMyFile.txt';
var data = " Data is not going to append"
console.log("Before Open");

// fs.writeFile(fileName,data,(error)=>{
//     if(error){
//         console.log("Error : ",error);
//     }
//     else
//         console.log("Data Inserted successfully");
// });

fs.appendFile(fileName,data,(error)=>{
    if(error){
        console.log("Error : ",error);
    }
    else
        console.log("Data Inserted successfully");
});

console.log("After Open");
