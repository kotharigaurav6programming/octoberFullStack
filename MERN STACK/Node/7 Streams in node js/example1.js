// example showing the concept of streams

var fs = require('fs');
fs.mkdir('myFolder',(error)=>{
    if(error)
        console.log("Error : "+error);
    else
        console.log("Folder created successfully");    
});