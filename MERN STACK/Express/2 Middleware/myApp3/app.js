import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
var app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// built-in middleware
app.use(express.static(__dirname));

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});

app.listen(3000,()=>{
    console.log("connection established successfully");
});