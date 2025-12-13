import express from 'express';
import { addDonorController } from '../controller/donorController.js';
var donorRouter = express.Router();

donorRouter.post("/addDonor",addDonorController);
export default donorRouter;