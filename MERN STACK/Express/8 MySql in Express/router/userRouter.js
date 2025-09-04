import express from 'express';
import { addUserController,userLoginController,addToDoTaskController,viewToDoListController,updateFormController,updateUserController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.post('/addUser',addUserController);
userRouter.post('/userLogin',userLoginController);
userRouter.get('/addToDo',(request,response)=>{
    response.render("addToDoForm.ejs",{email:request.session.email,message:""});
});
userRouter.post('/addToDoTask',addToDoTaskController);
userRouter.get('/viewToDoList',viewToDoListController);
userRouter.get('/updateForm',updateFormController);
userRouter.post('/updateUser',updateUserController);

export default userRouter;