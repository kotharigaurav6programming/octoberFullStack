import express from 'express';
import { addUserController,verifyEmailController,loginController, addProductController,viewProductController } from '../controller/UserController.js';
import multer from 'multer';
var userRouter = express.Router();

const storage = multer.diskStorage({
    destination : './public/images/',
    filename : (request,fileObj,callback)=>{
        callback(null,new Date().getTime()+fileObj.originalname);
    } 
});

const uploads = multer({storage:storage});

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
userRouter.post("/addProduct",uploads.fields([{name:'profileOne',maxCount:1},{name:'profileTwo',maxCount:1}]),addProductController);
userRouter.get("/viewProduct",viewProductController);

export default userRouter;