import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { loginAdminController,adminViewNGOListController,adminVerifyNGOController } from '../controller/adminController.js';
dotenv.config();
var adminRouter = express.Router();
const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET;

const authenticateJWT = (request, response, next) => {
    try {
        const token = request.query.adminTokenData;

        if (!token) {
            console.log("Token not available");
            return response.status(401).send("Token missing");
        }

        jwt.verify(token, ADMIN_SECRET_KEY, (error, payload) => {
            if (error) {
                console.log("Error while authenticating JWT:", error);
                return response.status(403).send("Invalid or expired token");
            }

            request.adminPayload = payload;
            next();
        });

    } catch (error) {
        console.log("Error while authenticating JWT:", error);
        return response.status(500).send("Internal server error");
    }
};

adminRouter.post("/loginAdmin",loginAdminController);
adminRouter.get("/adminViewNGOList",authenticateJWT,adminViewNGOListController);
adminRouter.post("/adminVerifyNGO",authenticateJWT,adminVerifyNGOController);

export default adminRouter;
