import express from 'express';
var app = express();

app.get('/',(request,response)=>{
    response.send("Home <h1>Page</h1>");
});
app.get('/about',(request,response)=>{
    response.send("<h1>About Page</h1>");
});
app.get('/contact',(request,response)=>{
    response.send("<h1>Contact Page</h1>");
});
app.get('/services',(request,response)=>{
    response.send("<h1>Services Page</h1>");
});
app.get('/faq',(request,response)=>{
    response.send("<h1>FAQ Page</h1>");
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});