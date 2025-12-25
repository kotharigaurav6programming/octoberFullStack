import express from 'express';
import { addNGOController,ngoVerifyEmailController } from '../controller/ngocontroller.js';
var ngoRouter = express.Router();

ngoRouter.post("/addNGO",addNGOController);
ngoRouter.post("/verifyEmail",ngoVerifyEmailController);

export default ngoRouter;