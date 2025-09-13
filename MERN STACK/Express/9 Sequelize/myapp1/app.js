import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
import userRouter from './router/userRouter.js';
dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRouter);

app.listen(3000, () => {
    console.log("Connection established successfully");
});