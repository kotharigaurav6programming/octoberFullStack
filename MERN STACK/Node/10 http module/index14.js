var http = require("http");
var fs = require("fs");
var url = require('url');
var {STATUS,TYPE}= require("./utils/utility.js");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);
    
    const requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=='/' || requestedURL.pathname=='/home' && request.method=='GET'){
        var data = "Home Page";
        response.write(data);
        response.end();
    }
    
    else if(requestedURL.pathname=='/about' && request.method=='POST'){
        var data = "About Page";
        response.write(data);
        response.end();
    }
    
    else if(requestedURL.pathname=='/contact' && request.method=='PUT'){
        var data = "Contact Page";
        response.write(data);
        response.end();
    }
    else if(requestedURL.pathname=='/services' && request.method=='DELETE'){
        var data = "Services Page";
        response.write(data);
        response.end();
    }

    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});
