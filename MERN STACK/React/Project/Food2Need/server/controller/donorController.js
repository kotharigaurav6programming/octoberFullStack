import uuid4 from 'uuid4';
import bcrypt from 'bcrypt';
import donorSchema from '../model/donorSchema.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {fileURLToPath} from 'url';
import path from 'path';
import surplusFoodSchema from '../model/surplusFoodSchema.js';
import ngoSchema from '../model/ngoSchema.js';
import { log } from 'console';
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
            console.log("password status : "+status);
            
            if(status){
                const donorPayload = {
                    _id : _id,
                    role:"donor"
                }
                const expiryTime = {
                    expiresIn : '365d'
                }
                const token = jwt.sign(donorPayload,DONOR_SECRET_KEY,expiryTime);
                response.status(200).send({_id,donorToken:token});
            }else{
                console.log("incorrect password");                
                response.status(401).send();
            }
        }else{
            console.log("object not found");
            response.status(401).send();
        }

    }catch(error){
        console.log("Error in loginDonorController : ",error);
        response.status(500).send();
    }
}

export const donorAddFoodController = async(request,response)=>{
    try{
        console.log("======================= > ",request.body);
        
        const filename = request.files.foodPic;
        console.log("============> ",filename);
        
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const fileName = new Date().getTime()+filename.name;
        const pathName = path.join(__dirname.replace("\\controller","")+'/public/donorImages/'+fileName);
        filename.mv(pathName,async (error)=>{
            if(error){
                console.log("Error while uploading image");
                response.status(415).send();
            }else{
                request.body.surplusId = uuid4();
                request.body.foodPic = fileName;
                const donorObj = await donorSchema.findOne({_id:request.body.userEmailId});
                request.body.userId = donorObj.userId;
                const result = await surplusFoodSchema.create(request.body);
                console.log("added surplus food status : ",result);
                response.status(200).send();
            }
        });
    }catch(error){
        console.log("Error in donorAddFoodController : ",error);
        response.status(500).send();
    }
}

export const donorSurplusFoodListController  = async(request,response)=>{
    try{
        var email = request.body._id;
        console.log(">>>>>>>>>>>>>>>>>> email : ",email);
        var obj = await donorSchema.find({_id:email});
        console.log(">>>>>>>>>>>>>>>>>> userId : ",obj[0].userId);
        
        var surplusFoodList = await surplusFoodSchema.find({userId:obj[0].userId}).lean();
        // console.log("............ ",surplusFoodList);
        for(var i=0;i<surplusFoodList.length;i++){
            if(surplusFoodList[i].allocatedNgoId!=""){
                var ngoObj = await ngoSchema.findOne({_id:surplusFoodList[i].allocatedNgoId});
                surplusFoodList[i].ngoName  = ngoObj.ngoName;
                surplusFoodList[i].ngoContact  = ngoObj.contact;
            }else{
                surplusFoodList[i].ngoName = "";
                surplusFoodList[i].ngoContact = '';
            }
        }
        //  console.log("$$$$$$$$$$$$$$$$$$ ",surplusFoodList);
      
        response.status(200).send({_id:request.donorPayload._id,surplusFoodList});
    }catch(error){
        console.log("Error while donorSurplusFoodListController : ",error);
        response.status(500).send();
    }
}