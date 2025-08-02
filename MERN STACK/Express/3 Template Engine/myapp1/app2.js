import express from 'express';
var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.get('/',(request,response)=>{
    response.render("index1.ejs",{username:"Andrew Anderson",address:"Indore , Madhya Pradesh"});
});

app.listen(3000,()=>{
    console.log("connection established");
});