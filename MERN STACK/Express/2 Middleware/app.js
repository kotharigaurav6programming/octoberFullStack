import express from 'express';
var app = express();

app.get('/',(request,response,next)=>{
    response.write("<br>statement 1");
    next();
},(request,response,demo)=>{
    response.write("<br>statement 2");
    demo();
},(request,response)=>{
    response.write("<br>statement 3");
    response.end();
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});