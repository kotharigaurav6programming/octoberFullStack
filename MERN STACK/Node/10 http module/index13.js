// needs to set type as module in package.json
import http from 'http';
import fs from 'fs';
import path from 'path';
import { STATUS,TYPE } from './utils/utility.js';
import url, { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

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
        var styleSheet = path.join(__dirname,'public/css/','style.css');
        var data = fs.createReadStream(styleSheet);
        data.pipe(response);
    }
    else if(requestedURL.match('\.jpg$')){
        response.writeHead(STATUS.SUCCESS,{'content-type':'image/jpg'});
        var resource = path.join(__dirname,"public/images/",'31589722.jpg');
        // console.log(__dirname);
        
        var data = fs.createReadStream(resource);
        data.pipe(response);
    }

});
instance.listen(process.env.PORT,()=>{
    console.log("Connection establish successfully");
});
