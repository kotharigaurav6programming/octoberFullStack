import express from 'express';
var app = express();
app.set("views","views");
app.set("view engine","ejs");

const bookDetails = [{
    bookName : "Programming in C",
    author : "Dennis Ritchie",
    publishedOn : "01/01/1972"
},{
    bookName : "Programming in C",
    author : "Dennis Ritchie",
    publishedOn : "01/01/1972"
},{
    bookName : "Programming in C",
    author : "Dennis Ritchie",
    publishedOn : "01/01/1972"
},{
    bookName : "Programming in C",
    author : "Dennis Ritchie",
    publishedOn : "01/01/1972"
},{
    bookName : "Programming in C",
    author : "Dennis Ritchie",
    publishedOn : "01/01/1972"
}];

app.get('/',(request,response)=>{
    response.render("index2.ejs",{bookDetails});
});

app.listen(3000,()=>{
    console.log("connection established");
});