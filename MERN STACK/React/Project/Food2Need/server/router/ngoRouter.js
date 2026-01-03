import express from 'express';
import { addNGOController,ngoVerifyEmailController,loginNgoController,ngoSurplusFoodListController,ngoApplyForFoodController } from '../controller/ngocontroller.js';
import jwt from 'jsonwebtoken';
var ngoRouter = express.Router();
const NGO_SECRET_KEY = process.env.NGO_SECRET;

const authenticateJWT = (request, response, next) => {
    try {
        const token = request.query.ngoTokenData;

        if (!token) {
            console.log("Token not available");
            return response.status(401).send("Token missing");
        }

        jwt.verify(token, NGO_SECRET_KEY, (error, payload) => {
            if (error) {
                console.log("Error while authenticating JWT:", error);
                return response.status(403).send("Invalid or expired token");
            }

            request.ngoPayload = payload;
            next();
        });

    } catch (error) {
        console.log("Error while authenticating JWT:", error);
        return response.status(500).send("Internal server error");
    }
};

ngoRouter.post("/addNGO",addNGOController);
ngoRouter.post("/verifyEmail",ngoVerifyEmailController);
ngoRouter.post("/loginNgo",loginNgoController);
ngoRouter.get("/ngoSurplusFoodList",authenticateJWT,ngoSurplusFoodListController);
ngoRouter.post("/ngoApplyForFood",authenticateJWT,ngoApplyForFoodController);

export default ngoRouter;