import express from 'express';
var app = express();

app.get('/',(request,response)=>{
    /*
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an example of Express Js");
    response.end();
    */
    //response.send("This is an example");
    response.status(200).json({status:"Success",message:"This is an example od Express js"});
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});
