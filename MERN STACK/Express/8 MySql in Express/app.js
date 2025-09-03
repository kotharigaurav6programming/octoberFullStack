import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
import { createDatabase } from './utility/utils.js';
import { createAdminDatabase } from './utility/adminUtils.js';
import { createToDoDatabase } from './utility/todoUtils.js';
import userRouter from './router/userRouter.js';
import adminRouter from './router/adminRouter.js';
dotenv.config();
var app = express();
createDatabase((err) => {
    if (err) throw err;
    console.log("Database ready");
});
createAdminDatabase((err) => {
    if (err) throw err;
    console.log("Admin Database ready");
});
createToDoDatabase((err) => {
    if (err) throw err;
    console.log("ToDo Database ready");
});

app.set("views","views");
app.set("view engine","ejs");
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
});


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));

app.use('/user',userRouter);
app.use('/admin',adminRouter);

app.get('/adminLogin',(request,response)=>{
    response.render("adminLogin.ejs",{message:""});
});

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.get('/login',(request,response)=>{
    response.render("login.ejs",{message:""});
});
app.get('/register',(request,response)=>{
    response.render("register.ejs");
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully with server");
});