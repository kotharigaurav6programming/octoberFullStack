import express from 'express';
import userRouter from './router/UserRouter.js';
import url from './config/dbConfig.js';
import mongoose from 'mongoose';
mongoose.connect(url);

var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/user',userRouter);

app.listen("3000",()=>{
    console.log("connection established successfully");    
});