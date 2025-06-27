// example showing the concept of streams
var fs = require('fs');
var path = 'myFolder/myFile.txt';

const readStream = fs.createReadStream(path,"utf-8");
readStream.on('data',(chunk)=>{
    // console.log(typeof chunk);
    const userArray = JSON.parse(chunk);
    for(var index in userArray){
        for(var key in userArray[index]){
            if(typeof userArray[index][key]==="object"){
                for(var subkey in userArray[index][key]){
                    if(typeof userArray[index][key][subkey]==="object"){
                        for(var innerKey in userArray[index][key][subkey]){
                            console.log(innerKey+" : "+userArray[index][key][subkey][innerKey]);
                        }
                    }else{
                        console.log(subkey+" : "+userArray[index][key][subkey]);
                    }
                }
            }else{
                console.log(key+" : "+userArray[index][key]);
            }
        }
        console.log("\n##################################\n");
    }    
});