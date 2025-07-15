var http = require("http");
var {STATUS,TYPE}= require("./utils/utility.js");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);
    console.log("url : ",request.url);
    console.log("method : ",request.method);
    console.log("headers : ",request.headers);
    console.log("headers : ",request.headers.host);
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});
