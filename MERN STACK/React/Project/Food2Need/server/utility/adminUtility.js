import adminSchema from "../model/adminSchema.js";
import bcrypt from 'bcrypt';

export const adminCredentials = async()=>{
    try{
        const res = await adminSchema.find();
        console.log("res in admin : ",res);
        if(res.length==0){
            var obj = {
                email : "admin@gmail.com",
                password : await bcrypt.hash("12345678",10)
            }
            var result = await adminSchema.create(obj);
            console.log("result in admin : ",result);
            console.log("Admin Credentials inserted");
        }else{
            console.log("Admin credentials already available");
        }
    }catch(error){
        return error;
    }
}