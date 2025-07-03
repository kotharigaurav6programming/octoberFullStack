// example showing the concept of fs module

var fs = require('fs');
var fileName = 'myFile1.txt';

console.log("Before Open");

// fs.open(fileName,'w',(error)=>{
//     if(error)
//         console.log("Error : ",error);
//     else
//         console.log("File created successfully");
// });

if(fs.existsSync(fileName)){
    console.log("File already exist");
}else{
    fs.open(fileName,'w',(error)=>{
        if(error)
            console.log("Error : ",error);
        else
            console.log("File created successfully");
    });
}

// fs.open(fileName,'wx',(error)=>{
//     if(error){
//         if(error.code=="EEXIST")
//             console.log("File Already Exist");
//         else    
//             console.log("Error : ",error);
//     }
//     else
//         console.log("File created successfully");
// });

console.log("After Open");
