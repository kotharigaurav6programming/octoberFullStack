var http = require("http");
var instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("Example of Http Module in NodeJs");
    response.write("<h1>Example of Http Module in NodeJs</h1>");
    response.end();
});
instance.listen(3000,()=>{
    console.log("Connection establish successfully");
});