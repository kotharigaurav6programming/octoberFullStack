import express, { response } from 'express';
import { loginController } from '../controller/userController.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
var indexRouter = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;
const authenticateJWT = (request,response,next)=>{
    try{
        const token = request.cookies.jwtCookie;
        console.log("token : ",token);
        if(!token)
            response.json({message:"Error while authenticate jwt"});
        else{
            jwt.verify(token,SECRET_KEY,(error,payload)=>{
                if(error)
                    console.log("Error while verifying token : ",error);        
                else{
                    request.payload = payload;
                    next();
                }
            });
        }
    }catch(error){
       console.log("Error while authenticate jwt : ",error);        
        //response.render("index.ejs");
}
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.payload.role=="admin")
            response.render("admin.ejs",{email:request.payload.email});
        else 
            response.render("user.ejs",{email:request.payload.email});
        next();
    }catch(error){
        console.log("Error while authorize jwt : ",error);
    }
}
indexRouter.get("/login",(request,response)=>{
    response.render("login.ejs",{message:""});
});
indexRouter.post('/login',loginController);
indexRouter.get("/profile",authenticateJWT,authorizeJWT,(request,response)=>{
    console.log("Task completed");
});

export default indexRouter;