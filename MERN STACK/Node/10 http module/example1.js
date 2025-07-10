var http = require("http");

const instance = http.createServer((request,response)=>{
    response.write("This is an example of http module");
    response.end();
});
instance.listen(5001,()=>{
    console.log("server connection established");
});