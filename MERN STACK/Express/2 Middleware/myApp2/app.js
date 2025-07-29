import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import adminRouter from './router/adminRouter.js';
import userRouter from './router/userRouter.js';

var app = express();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});

app.use('/admin',adminRouter);
app.use('/user',userRouter);


app.listen(3000,()=>{
    console.log("Connection established successfully");
});