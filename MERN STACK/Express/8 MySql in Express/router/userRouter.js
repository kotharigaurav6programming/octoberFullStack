import express from 'express';
import { addUserController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.post('/addUser',addUserController);

export default userRouter;