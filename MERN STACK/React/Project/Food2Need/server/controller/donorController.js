import uuid4 from 'uuid4';
import bcrypt from 'bcrypt';
import donorSchema from '../model/donorSchema.js';

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