import express from 'express';
import { loginController } from '../controller/userController.js';
var indexRouter = express.Router();

indexRouter.get("/login",(request,response)=>{
    response.render("login.ejs",{message:""});
});
indexRouter.post('/login',loginController);
indexRouter.get("/profile",(request,response)=>{
    
});

export default indexRouter;