var http = require("http");
var fs = require("fs");
var {STATUS,TYPE}= require("./utils/utility.js");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);
    if(request.url=='/' || request.url=='/home'){
        fs.readFile('home.html',(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else{
                response.write(result);
                response.end();
            }
        });
    }
    
    else if(request.url=='/about'){
        fs.readFile('about.html',(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else{
                response.write(result);
                response.end();
            }
        });
    }
    
    else if(request.url=='/contact'){
        fs.readFile('contact.html',(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else{
                response.write(result);
                response.end();
            }
        });
    }
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});