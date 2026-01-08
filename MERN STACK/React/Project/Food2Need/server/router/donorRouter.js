import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { addDonorController,loginDonorController,donorAddFoodController,donorSurplusFoodListController } from '../controller/donorController.js';
dotenv.config();
var donorRouter = express.Router();
const DONOR_SECRET_KEY = process.env.DONOR_SECRET;

const authenticateJWT = (request, response, next) => {
    try {
        const token = request.query.donorTokenData;

        if (!token) {
            console.log("Token not available");
            return response.status(401).send("Token missing");
        }

        jwt.verify(token, DONOR_SECRET_KEY, (error, payload) => {
            if (error) {
                console.log("Error while authenticating JWT:", error);
                return response.status(403).send("Invalid or expired token");
            }

            request.donorPayload = payload;
            next();
        });

    } catch (error) {
        console.log("Error while authenticating JWT:", error);
        return response.status(500).send("Internal server error");
    }
};
donorRouter.post("/addDonor",addDonorController);
donorRouter.post("/loginDonor",loginDonorController);
donorRouter.post("/donorAddFood",authenticateJWT,donorAddFoodController);
donorRouter.post("/donorSurplusFoodList",authenticateJWT,donorSurplusFoodListController);

export default donorRouter;