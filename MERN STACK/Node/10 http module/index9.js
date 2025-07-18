var http = require("http");
var fs = require("fs");
var url = require('url');
var {STATUS,TYPE}= require("./utils/utility.js");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);
    // http://localhost:3000/home?a=100
    // http://localhost:3000/about?a=100&b=200
    // http://localhost:3000/contact?b=200
    
    const requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=='/' || requestedURL.pathname=='/home'){
        var data = "Home Page";
        response.write(data);
        response.end();
    }
    
    else if(requestedURL.pathname=='/about'){
        var data = "About Page";
        response.write(data);
        response.end();
    }
    
    else if(requestedURL.pathname=='/contact'){
        var data = "Contact Page";
        response.write(data);
        response.end();
    }
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});
