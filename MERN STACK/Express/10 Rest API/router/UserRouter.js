import express from 'express';
import { addUserController, deleteUserController, updateUserController, viewAllUserController } from '../controller/UserController.js';

var  userRouter = express.Router();

userRouter.get('/viewAllUser',viewAllUserController);
userRouter.post('/addUser',addUserController);
userRouter.put('/updateUser/:email',updateUserController);
userRouter.delete('/deleteUser',deleteUserController);

export default userRouter;