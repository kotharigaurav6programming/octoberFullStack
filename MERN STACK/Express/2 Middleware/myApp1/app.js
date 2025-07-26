import express from 'express';
var app = express();

app.get('/',(request,response,next)=>{
    const error = new Error("Error Occured");
    next(error);
});

app.use((err,request,response,next)=>{
    response.send("Error : <h2>"+err+"</h2>");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});