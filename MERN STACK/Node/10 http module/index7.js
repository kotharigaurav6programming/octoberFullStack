var http = require("http");
var fs = require("fs");
var {STATUS,TYPE}= require("./utils/utility.js");
var url = require('url');
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    response.writeHead(STATUS.SUCCESS,TYPE);

    // http://localhost:3000/home?a=100&b=200
    const requestedURL = url.parse(request.url);
    // console.log("requestedURL : ",requestedURL);
    console.log("query : ",requestedURL.query);
    console.log("typeof query : ",typeof requestedURL.query);
    
    console.log("pathname : ",requestedURL.pathname);
    console.log("typeof pathname : ",typeof requestedURL.pathname);

});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});
