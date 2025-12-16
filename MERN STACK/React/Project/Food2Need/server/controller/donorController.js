import uuid4 from 'uuid4';
import bcrypt from 'bcrypt';
import donorSchema from '../model/donorSchema.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
const DONOR_SECRET_KEY = process.env.DONOR_SECRET;
export const addDonorController = async(request,response)=>{
    try{
        request.body.userId = uuid4();
        request.body.password = await bcrypt.hash(request.body.password,10);
        const result = await donorSchema.create(request.body);
        console.log("Result : ",result);
        response.status(200).send();        
    }catch(error){
        console.log("Error in addDonorController : ",error);
        response.status(500).send();
    }
}

export const loginDonorController = async(request,response)=>{
    try{
        const {_id,password} = request.body;
        console.log("gets entry email : "+_id+" and password : "+password);
        
        const donorObj = await donorSchema.findOne({_id:_id});
        console.log("donorObj : ",donorObj);
        
        if(donorObj){
            const existingPassword = donorObj.password;
            const status = await bcrypt.compare(password,existingPassword);
            if(status){
                const donorPayload = {
                    _id : _id,
                    role:"donor"
                }
                const expiryTime = {
                    expiresIn : '365d'
                }
                const token = await jwt.sign(donorPayload,DONOR_SECRET_KEY,expiryTime);
                response.status(200).send({_id,donorToken:token});
            }else
                response.status(401).send();
        }else{
            response.status(401).send();
        }

    }catch(error){
        console.log("Error in loginDonorController : ",error);
        response.status(500).send();
    }
}