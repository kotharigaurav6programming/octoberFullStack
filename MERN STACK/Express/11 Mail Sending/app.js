import express from 'express';
import expressSession from 'express-session';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { url } from './config/dbConfig.js';
import userRouter from './router/UserRouter.js';
import expressFileUpload from 'express-fileupload';
mongoose.connect(url);

dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));
app.use(expressFileUpload());

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.use('/user',userRouter);

app.listen(process.env.PORT,()=>{
    console.log("connection established successfully");
});