import express from 'express';
import { adminLoginController,adminViewUsersListController } from '../controller/adminController.js';
var adminRouter = express.Router();

adminRouter.post('/adminLogin',adminLoginController);
adminRouter.get('/adminViewUsersList',adminViewUsersListController);

export default adminRouter;