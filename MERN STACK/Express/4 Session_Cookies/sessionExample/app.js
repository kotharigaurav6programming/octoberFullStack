import express from 'express';
import expressSession from 'express-session';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));

app.get('/',(request,response)=>{
    response.render('index.ejs',{message:"",email:null});
});
app.post('/checkCredential',(request,response)=>{
    const {email,password} = request.body;
    if(email=="andrew@gmail.com" && password=="andrew@123"){
        request.session.email = email;
        request.session.save();
        response.render('index.ejs',{email});
    }else{
        response.render('index.ejs',{message:"Invalid Credentials",email:null});
    }
});

app.get('/logout',(request,response)=>{
    request.session.email=null;
    request.session.destroy((error)=>{
        if(error)
            response.render('notfound.ejs');
        else
            response.render("index.ejs",{message:"Logout Successfully",email:null});
    });
});
app.listen(3000,()=>{
    console.log("connection established successfully");
});