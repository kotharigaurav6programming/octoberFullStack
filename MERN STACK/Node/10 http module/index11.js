var http = require("http");
var fs = require("fs");
var {STATUS,TYPE}= require("./utils/utility.js");
var url = require("url");
var dotenv = require("dotenv");
dotenv.config();

var instance = http.createServer((request,response)=>{
    var requestedURL = url.parse(request.url).pathname;
    if(request.url=='/' || request.url=='/home'){
        response.writeHead(STATUS.SUCCESS,TYPE);
        var data = fs.readFileSync('home.html');
        response.write(data);
            response.end();

    }
    
    else if(requestedURL=='/about'){
        response.writeHead(STATUS.SUCCESS,TYPE);
        var data = fs.readFileSync('about.html','utf-8');
        response.write(data);
            response.end();

    }
    
    else if(requestedURL=='/contact'){
        response.writeHead(STATUS.SUCCESS,TYPE);
        var data = fs.readFileSync('contact.html','utf-8');
        response.write(data);
            response.end();

    }

    else if(requestedURL.match('\.css$')){
        response.writeHead(STATUS.SUCCESS,{'content-type':'text/css'});
        var data = fs.createReadStream('public/css/style.css');
        data.pipe(response);
    }
    else if(requestedURL.match('\.jpg$')){
        response.writeHead(STATUS.SUCCESS,{'content-type':'image/jpg'});
        var data = fs.createReadStream('public/images/31589722.jpg');
        data.pipe(response);
    }

});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});
