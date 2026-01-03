import uuid4 from 'uuid4';
import bcrypt from 'bcrypt';
import ngoSchema from '../model/ngoSchema.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {fileURLToPath} from 'url';
import path from 'path';
import mailer from './mailer.js';
import surplusFoodSchema from '../model/surplusFoodSchema.js';

dotenv.config();
const NGO_SECRET_KEY = process.env.NGO_SECRET;

export const addNGOController = async(request,response)=>{
    try{
            console.log("======================= > ",request.body);
            
            const filename = request.files.ngoPic;
            console.log("============> ",filename);
            
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
    
            const fileName = new Date().getTime()+filename.name;
            const pathName = path.join(__dirname.replace("\\controller","")+'/public/ngoImages/'+fileName);
            filename.mv(pathName,async (error)=>{
                if(error){
                    console.log("Error while uploading image");
                    response.status(415).send();
                }else{
                    try{
                        mailer.mailer(request.body._id,async (value)=>{
                            if(value){
                                console.log("Mail send");
                                request.body.ngoId = uuid4();
                                request.body.ngoPic = fileName;
                                request.body.password = await bcrypt.hash(request.body.password,10);
                                const result = await ngoSchema.create(request.body);
                                console.log("Result : ",result);
                                response.status(200).send();                       
                            }else{
                                console.log("Mail not Send");
                                response.render("login.ejs",{message:"Error while sending mail"});
                            }
                        });
                    }catch(error){
                        console.log("Error occured in addNGOController : ",error);
                    }
                }
            });
        }catch(error){
            console.log("Error in addNGOController : ",error);
            response.status(500).send();
        }
}

export const loginNgoController = async(request,response)=>{
    try{
        const {_id,password} = request.body;
        console.log("gets entry email : "+_id+" and password : "+password);
        
        const ngoObj = await ngoSchema.findOne({_id:_id});
        console.log("ngoObj : ",ngoObj);
        
        if(ngoObj){
            const existingPassword = ngoObj.password;
            const status = await bcrypt.compare(password,existingPassword);
            console.log("password status : "+status);
            
            if(status){
                const ngoPayload = {
                    _id : _id,
                    role:"ngo"
                }
                const expiryTime = {
                    expiresIn : '365d'
                }
                const token = jwt.sign(ngoPayload,NGO_SECRET_KEY,expiryTime);
                response.status(200).send({_id,ngoToken:token});
            }else{
                console.log("incorrect password");                
                response.status(401).send();
            }
        }else{
            console.log("object not found");
            response.status(401).send();
        }

    }catch(error){
        console.log("Error in loginNgoController : ",error);
        response.status(500).send();
    }
}

export const ngoVerifyEmailController = async(request,response)=>{
    try{
        var _id = request.body._id;
        var updateStatus = {
            $set : {
                emailVerify : true
            }
        }
        const result = await ngoSchema.updateOne({_id},updateStatus);
        console.log("Result of email verify : ",result);
        if(result.modifiedCount==1){
            response.redirect("http://localhost:3000/ngoLogin?message='Email Verified | Wait for Admin Approval'");
        }else{
            response.redirect("http://localhost:3000/ngoLogin?message='Already Verified'");
        }
    }catch(error){
        console.log("Error while verifying ngo : ",error);  
        response.redirect("http://localhost:3000/ngoLogin?message='Something went wrong'");   
    }
}

export const ngoSurplusFoodListController  = async(request,response)=>{
    try{
        var surplusFoodList = await surplusFoodSchema.find();
        response.status(200).send({_id:request.ngoPayload._id,surplusFoodList});
    }catch(error){
        console.log("Error while ngoSurplusFoodListController : ",error);
        response.status(500).send();
    }
}

export const ngoApplyForFoodController  = async(request,response)=>{
    try{
        var surplusId = request.body.surplusId;
        var _id = request.body.ngoEmail;
        var updateStatus = {
            $set :{
                allocatedNgoId : _id
            }
        }
        var result = await surplusFoodSchema.updateOne({surplusId},updateStatus);
        console.log("Result of ngoApplyForFood : ",result);        
        var surplusFoodList = await surplusFoodSchema.find();
        response.status(200).send({_id:request.ngoPayload._id,surplusFoodList});
    }catch(error){
        console.log("Error while ngoApplyForFoodController : ",error);
        response.status(500).send();
    }
}