// example showing the concept of streams

var fs = require('fs');
if(fs.existsSync('myFolder1/myFolder2'))
    console.log('Already Exist');
else{
    fs.mkdir('myFolder1/myFolder2',{recursive:true},(error)=>{
        if(error)
            console.log("Error : "+error);
        else
            console.log("Folder created successfully");    
    });
}
