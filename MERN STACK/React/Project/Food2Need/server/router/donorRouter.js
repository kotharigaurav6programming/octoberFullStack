import express from 'express';
import { addDonorController,loginDonorController } from '../controller/donorController.js';
var donorRouter = express.Router();

donorRouter.post("/addDonor",addDonorController);
donorRouter.post("/loginDonor",loginDonorController);

export default donorRouter;