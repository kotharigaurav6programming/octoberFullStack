var http = require("http");
var fs = require("fs");
var url = require('url');
var {STATUS,TYPE}= require("./utils/utility.js");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);
    
    const requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=='/' || requestedURL.pathname=='/home'){
        var data = fs.readFileSync("homeNew.html");
        response.write(data);
    }
    else if(requestedURL.pathname=='/register'){
        var data = fs.readFileSync("register.html");
        response.write(data);
    }
    else if(requestedURL.pathname=='/viewData'){
        var data = requestedURL.query;
        response.write("<br>Username : "+data.username);
        response.write("<br>Email : "+data.email);
        response.write("<br>Password : "+data.password);
        response.write("<br>Address : "+data.address);
    }    
 
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});
