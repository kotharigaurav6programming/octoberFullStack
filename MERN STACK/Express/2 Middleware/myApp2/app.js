import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';

var app = express();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});