import express from 'express';
import Validation from 'express-validator';
var {check,validationResult} = Validation;
var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.get('/register',(request,response)=>{
    response.render("register.ejs");
});
app.post('/viewCredentials',[
    check("username","Enter Username").not().isEmpty(),
    check("email","Enter Email").not().isEmpty(),
    check("password","Enter Password").not().isEmpty().isLength({min:5,max:10}),
    check("contact","Enter 10 digit Mobile No.").custom((value)=>{
        var regex = /^[6789][0-9]{9}$/;
        if(regex.test(value))
            return true;
        else
            return false;
    })
],(request,response)=>{
    var error = validationResult(request);
    if(!error.isEmpty()){
        console.log("Error : ",error);
        response.send("Error occured");
    }else
        response.send("Success");
});
app.listen(3000,(request,response)=>{
    console.log("Connection established successfully");
});