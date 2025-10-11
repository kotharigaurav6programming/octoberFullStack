import express from 'express';
import { addUserController,verifyEmailController,loginController, addProductController } from '../controller/UserController.js';
var userRouter = express.Router();

userRouter.get("/",(request,response)=>{
    response.render("index.ejs");
});
userRouter.get("/login",(request,response)=>{
    response.render("login.ejs",{message:""});
});
userRouter.get("/register",(request,response)=>{
    response.render("register.ejs");
});
userRouter.post("/register",addUserController);
userRouter.post("/verifyEmail",verifyEmailController);
userRouter.post("/login",loginController);
userRouter.get("/profileHome",(request,response)=>{
    response.render("profile.ejs",{email:request.session.email,message:""});
});
userRouter.get("/addProduct",(request,response)=>{
    response.render("addProduct.ejs",{email:request.session.email,message:""});
});
userRouter.post("/addProduct",addProductController);

export default userRouter;