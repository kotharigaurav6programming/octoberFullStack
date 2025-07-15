var http = require("http");
var {STATUS,TYPE}= require("./utils/utility.js");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);
    if(request.url=='/' || request.url=='/home')
        response.write("<h1>Home Page</h1>");
    
    else if(request.url=='/services')
        response.write("<h1>Services Page</h1>");
    
    else if(request.url=='/about')
        response.write("<h1>About Us Page</h1>");
    
    else if(request.url=='/contact')
        response.write("<h1>Contact Us Page</h1>");
    
    else if(request.url=='/faq')
        response.write("<h1>faq Page</h1>");
    
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});