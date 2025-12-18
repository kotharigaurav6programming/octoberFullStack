import express from 'express';
import { addDonorController,loginDonorController,donorAddFoodController } from '../controller/donorController.js';
var donorRouter = express.Router();

donorRouter.post("/addDonor",addDonorController);
donorRouter.post("/loginDonor",loginDonorController);
donorRouter.post("/donorAddFood",donorAddFoodController);

export default donorRouter;