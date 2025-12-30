import express from 'express';
import { addNGOController,ngoVerifyEmailController,loginNgoController } from '../controller/ngocontroller.js';
var ngoRouter = express.Router();

ngoRouter.post("/addNGO",addNGOController);
ngoRouter.post("/verifyEmail",ngoVerifyEmailController);
ngoRouter.post("/loginNgo",loginNgoController);

export default ngoRouter;