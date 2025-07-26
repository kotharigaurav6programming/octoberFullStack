import express from 'express';
var app = express();

const myFun1 = (request,response,next)=>{
    response.write("<br>statement 1");
    next();
}
const myFun2 = (request,response,demo)=>{
    response.write("<br>statement 2");
    demo();
}
app.get('/',myFun1,myFun2,(request,response)=>{
    response.write("<br>statement 3");
    response.end();
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});