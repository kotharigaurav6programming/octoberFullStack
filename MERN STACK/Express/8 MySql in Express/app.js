import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
import { createDatabase } from './utility/utils.js';
dotenv.config();
var app = express();
app.use(createDatabase());
app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.get('/login',(request,response)=>{
    response.render("login.ejs");
});
app.get('/register',(request,response)=>{
    response.render("register.ejs");
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully with server");
});