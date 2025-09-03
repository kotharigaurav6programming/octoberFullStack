import express from 'express';
import { adminLoginController,adminViewUsersListController,adminVerifyUserController,adminLogoutController } from '../controller/adminController.js';
var adminRouter = express.Router();

adminRouter.post('/adminLogin',adminLoginController);
adminRouter.get('/adminViewUsersList',adminViewUsersListController);
adminRouter.get('/adminVerifyUser',adminVerifyUserController);
adminRouter.get('/adminLogout',adminLogoutController);
export default adminRouter;