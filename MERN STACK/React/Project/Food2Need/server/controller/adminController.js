import uuid4 from 'uuid4';
import bcrypt from 'bcrypt';
import adminSchema from '../model/adminSchema.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {fileURLToPath} from 'url';
import path from 'path';
import ngoSchema from '../model/ngoSchema.js';
dotenv.config();
const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET;

export const loginAdminController = async(request,response)=>{
    try{
        const {email,password} = request.body;
        console.log("gets entry email : "+email+" and password : "+password);
        
        const adminObj = await adminSchema.findOne({email:email});
        console.log("adminObj : ",adminObj);
        
        if(adminObj){
            const existingPassword = adminObj.password;
            const status = await bcrypt.compare(password,existingPassword);
            console.log("password status : "+status);
            
            if(status){
                const adminPayload = {
                    email : email,
                    role:"admin"
                }
                const expiryTime = {
                    expiresIn : '365d'
                }
                const token = jwt.sign(adminPayload,ADMIN_SECRET_KEY,expiryTime);
                response.status(200).send({email,adminToken:token});
            }else{
                console.log("incorrect password");                
                response.status(401).send();
            }
        }else{
            console.log("object not found");
            response.status(401).send();
        }

    }catch(error){
        console.log("Error in loginAdminController : ",error);
        response.status(500).send();
    }
}

export const adminViewNGOListController  = async(request,response)=>{
    try{
        var ngoList = await ngoSchema.find();
        response.status(200).send({email:request.adminPayload.email,ngoList});
    }catch(error){
        console.log("Error while adminViewNgoListController : ",error);
        response.status(500).send();
    }
}