import productSchema from "../model/productSchema.js";
import UserSchema from "../model/UserSchema.js";
import mailer from "./mailer.js";
import path from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addUserController = (request,response)=>{
    try{
        mailer.mailer(request.body.email,async (value)=>{
            if(value){
                console.log("Mail send");
                const res = await UserSchema.create(request.body);
                console.log("Result : ",res);
                console.log("Data inserted successfully");
                response.render("login.ejs",{message:"Mail Sent | Please Verify"});
            }else{
                console.log("Mail not Send");
                response.render("login.ejs",{message:"Error while sending mail"});
            }
        });
    }catch(error){
        console.log("Error occured in addUserController : ",error);
    }
}

export const verifyEmailController = async(request,response)=>{
    try{
        // const email = request.body.email;
        // console.log("Email needs to verify : ",email);
        const email = {email : request.body.email};
        const  updateStatus = {
            $set:{
                emailVerified : "Verified"
            }
        }
        const res = await UserSchema.updateOne(email,updateStatus);
        // console.log("Result : ",res);
        response.render("login.ejs",{message:"Email Verification Successfull | Now You can Login"}); 
    }catch(error){
        console.log("Error : ",error);
    }
}

export const loginController = async (request,response)=>{
    try{    
        const res = {
            $and : [
                {
                    email : request.body.email,
                    password : request.body.password,
                    emailVerified : "Verified"
                }
            ]
        }
        const result = await UserSchema.find(res);
        // console.log(value);
        if(result.length!=0){
            request.session.email = request.body.email;
            request.session.save();
            response.render("profile.ejs",{email : request.session.email,message:""});
        }else{
            response.render("login.ejs",{message:"Email or Password is wrong"});
        }
    }catch(error){
        console.log("Error while login : ",error);
    }
}

export const addProductController = async(request,response)=>{
    try{
        // const res1 = request.body;
        // const res2 = request.files;
        // const res3 = request.files.profile;
        // console.log("res1 : ",res1);
        // console.log("res2 : ",res2);
        // console.log("res3 : ",res3);
        
        const filename = request.files.profile;
        const fileName = new Date().getTime()+filename.name;
        const pathName = path.join(__dirname+'/public/images/'+fileName).replace("\\controller",'');
        // console.log(pathName);
        filename.mv(pathName,async(error)=>{
            if(error){
                console.log("Error occured while uploading file : ",error);
            }else{
                request.body.profile = fileName;
                const res = await productSchema.create(request.body);
                console.log("res : ",res);
                response.render("addProduct.ejs",{email:request.session.email,message:"Product Added successfully"});
            }
        });
    }catch(error){
        console.log("Error while adding product : ",error);
    }
}