//https://www.geeksforgeeks.org/web-tech/json-web-token-jwt/
//https://medium.com/@sangiri15sivam/jwt-d848bd9a0c23

import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './router/indexRouter.js';
// import crypto from 'crypto';
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine","ejs");

// const SECRET_KEY = crypto.randomBytes(32).toString('Hex');
// console.log(SECRET_KEY);

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.use('/index',indexRouter);
app.listen(process.env.PORT,()=>{
    console.log("connection established successfully");
})