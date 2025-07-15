var http = require("http");
var {STATUS,TYPE}= require("./utils/utility.js");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);
    response.write("Example of Http Module in NodeJs...");
    response.write("<h1>Example of Http Module in NodeJs...</h1>");
    response.end();
});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});