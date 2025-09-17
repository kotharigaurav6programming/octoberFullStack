import express from 'express';
import { addStudentController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.get('/addStudent',(request,response)=>{
    response.render("addStudent.ejs");
});

userRouter.post('/addStudent', addStudentController);

export default userRouter;