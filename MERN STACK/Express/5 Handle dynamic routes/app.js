import express from 'express';
var app = express();

// handle single route
app.get("/example",(request,response)=>{
    var name = request.query.name;
    response.send("Name : "+name);
});
// handle single route
app.get("/example/:email",(request,response)=>{
    var email = request.params.email;
    response.send("Email : "+email);
});
// handle multiple routes
app.get("/example/:email/:password",(request,response)=>{
    var email = request.params.email;
    var password = request.params.password;
    response.send("Email : "+email+"<br>Password : "+password);
});
// Handle by wildcard in Express 5 | optional route
app.get('/exampleEmail/{*name}', (req, res) => {
  const name = req.params.name ?? "noname";
  res.send(`Name: ${name}`);
});


app.listen(3000,(request,response)=>{
    console.log("Server connection successfull");
});