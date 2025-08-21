import express from 'express';
import cookieParser from 'cookie-parser';
var app = express();
app.use(cookieParser());

app.get("/addCookie",(request,response)=>{
    response.cookie("cookie_name","andrew@gmail.com",{expire:360000});
    response.send("Cookie set");
});
app.get("/viewCookie",(request,response)=>{
    response.send(request.cookies);
});
app.get("/deleteCookie",(request,response)=>{
    response.clearCookie("cookie_name");
    response.send("Cookie deleted");
});

app.listen(3000,(request,response)=>{
    console.log("Server connection successfull");
});