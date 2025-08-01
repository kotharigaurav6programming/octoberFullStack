import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

var app = express();
// Third party middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(request,response)=>{
    response.sendFile(__dirName+'/index.html');
});
app.get("/register",(request,response)=>{
    response.sendFile(__dirName+'/register.html');
});

// method get
// app.get('/viewData',(request,response)=>{
//     const {username,email,password,address} = request.query;
//     response.writeHead(200,{'content-type':'text/html'});
//     response.write("User<b>name</b> : "+username);
//     response.write("<br><b>Email</b> : "+email);
//     response.write("<br><b>Password</b> : "+password);
//     response.write("<br><b>Address</b> : "+address);
//     response.end();
// });

// method post
app.post('/viewData',(request,response)=>{
    const {username,email,password,address} = request.body;
    response.writeHead(200,{'content-type':'text/html'});
    response.write("User<b>name</b> : "+username);
    response.write("<br><b>Email</b> : "+email);
    response.write("<br><b>Password</b> : "+password);
    response.write("<br><b>Address</b> : "+address);
    response.end();
});

app.listen(3000,(request,response)=>{
   console.log("Connection established successfully");
});