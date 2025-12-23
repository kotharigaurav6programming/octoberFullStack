import uuid4 from 'uuid4';
import bcrypt from 'bcrypt';
import ngoSchema from '../model/ngoSchema.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {fileURLToPath} from 'url';
import path from 'path';
import mailer from './mailer.js';
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

// export const loginDonorController = async(request,response)=>{
//     try{
//         const {_id,password} = request.body;
//         console.log("gets entry email : "+_id+" and password : "+password);
        
//         const donorObj = await donorSchema.findOne({_id:_id});
//         console.log("donorObj : ",donorObj);
        
//         if(donorObj){
//             const existingPassword = donorObj.password;
//             const status = await bcrypt.compare(password,existingPassword);
//             console.log("password status : "+status);
            
//             if(status){
//                 const donorPayload = {
//                     _id : _id,
//                     role:"donor"
//                 }
//                 const expiryTime = {
//                     expiresIn : '365d'
//                 }
//                 const token = jwt.sign(donorPayload,DONOR_SECRET_KEY,expiryTime);
//                 response.status(200).send({_id,donorToken:token});
//             }else{
//                 console.log("incorrect password");                
//                 response.status(401).send();
//             }
//         }else{
//             console.log("object not found");
//             response.status(401).send();
//         }

//     }catch(error){
//         console.log("Error in loginDonorController : ",error);
//         response.status(500).send();
//     }
// }

