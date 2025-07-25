import express from 'express';
import url from 'url';
var app = express();
app.get('/home',(request,response)=>{
    response.send("<h1>Home Page</h1>");
});

// http://localhost:3000/operation?a=100&b=200

app.get('/operation',(request,response)=>{
    const queryObj = url.parse(request.url,true).query;
    const  sum = parseInt(queryObj.a) + parseInt(queryObj.b);
    response.send(`<h1>Operation : ${sum}</h1>`);
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});