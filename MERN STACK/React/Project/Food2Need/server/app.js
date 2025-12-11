import express from "express";
import dotenv from 'dotenv';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import expressFileUpload from 'express-fileupload';
import { url } from "./connection/dbConfig.js";
import cors from 'cors';
import adminRouter from "./router/adminRouter.js";
import ngoRouter from "./router/ngoRouter.js";
import donorRouter from "./router/donorRouter.js";
dotenv.config();
var app = express();
mongoose.connect(url);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));
app.use(cookieParser());
app.use(expressFileUpload());

app.use("/admin",adminRouter);
app.use("/donor",donorRouter);
app.use("/ngo",ngoRouter);

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});