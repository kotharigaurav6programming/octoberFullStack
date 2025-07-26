import express from 'express';
var app = express();

const myFun1 = (request,response,next)=>{
    response.write("<br>statement 1..");
    next();
}
const myFun2 = (request,response)=>{
    response.write("<br>statement 2");
    response.end();
}

app.get('/',(request,response,next)=>{
    response.write("<br>statement 3");
    next();
    // response.end();
});

app.use(myFun1); // Application level middleware | Top level middleware
app.use(myFun2); // Application level middleware | Top level middleware

app.listen(3000,()=>{
    console.log("Server connection successfull");
});