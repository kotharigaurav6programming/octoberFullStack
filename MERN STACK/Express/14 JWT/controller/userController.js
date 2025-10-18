import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const loginController = async(request,response)=>{
    try{
        if(request.body.email=="admin@gmail.com" && request.body.password=="12345678"){
            request.body.role = "admin";
        }else
            request.body.role = "user";
        const expiryTime = {
            expiresIn : '1d'
        }
        const SECRET_KEY = process.env.SECRET_KEY; // if error needs to import dotenv here
        const token = jwt.sign(request.body,SECRET_KEY,expiryTime);
        response.cookie('jwtCookie',token,{httpOnly:true,maxAge:720000*24});
        response.redirect('/index/profile');
    }catch(error){
        console.log("Error while login : ",error);
    }
}