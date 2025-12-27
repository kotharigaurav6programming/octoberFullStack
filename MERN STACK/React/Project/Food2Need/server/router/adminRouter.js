import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { loginAdminController,adminViewNGOListController } from '../controller/adminController.js';
dotenv.config();
var adminRouter = express.Router();
const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET;

const authenticateJWT = async(request,response,next)=>{
    try{
        var token = request.query.adminTokenData;
        if(!token){
            console.log("Token not available");
            response.status(404).send();
        }
        jwt.verify(token,ADMIN_SECRET_KEY,(error,payload)=>{
            if(error){
                console.log("error while authenticate jwt : ",error);
                response.status(403).send();
            }else{
                request.adminPayload = payload;
                next();
            }
        })
    }catch(error){
        console.log("Error while authenticate jwt : ",error);
        response.status(500).send();        
    }
}

adminRouter.post("/loginAdmin",loginAdminController);
adminRouter.get("/adminViewNGOList",authenticateJWT,adminViewNGOListController);

export default adminRouter;