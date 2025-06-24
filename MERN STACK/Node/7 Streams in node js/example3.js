// example showing the concept of streams

var fs = require('fs');
fs.mkdir('myFolder1/myFolder2',{recursive:true},(error)=>{
    if(error)
        console.log("Error : "+error);
    else
        console.log("Folder created successfully");    
});