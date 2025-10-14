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
        const data = request.files;
        console.log(data);
        request.body.profileOne = request.files['profileOne'][0].filename;
        request.body.profileTwo = request.files['profileTwo'][0].filename;

        const res = await productSchema.create(request.body);
        console.log("res : ",res);
        response.render("addProduct.ejs",{email:request.session.email,message:"Product Added successfully"});
         
    }catch(error){
        console.log("Error while adding product : ",error);
    }
}

export const viewProductController = async (request,response)=>{
    try{
        const data = await productSchema.find();
        console.log(data);
        
        response.render("viewData.ejs",{email:request.session.email,message:"",data});
    }catch(error){
        console.log("Error while viewing product");
    }
}