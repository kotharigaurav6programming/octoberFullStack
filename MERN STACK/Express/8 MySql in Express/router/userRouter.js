import express from 'express';
import { addUserController,userLoginController,addToDoTaskController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.post('/addUser',addUserController);
userRouter.post('/userLogin',userLoginController);
userRouter.get('/addToDo',(request,response)=>{
    response.render("addToDoForm.ejs",{email:request.session.email,message:""});
});
userRouter.post('/addToDoTask',addToDoTaskController);
export default userRouter;