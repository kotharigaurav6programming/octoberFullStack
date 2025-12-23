import express from 'express';
import { addNGOController } from '../controller/ngocontroller.js';
var ngoRouter = express.Router();

ngoRouter.post("/addNGO",addNGOController);

export default ngoRouter;