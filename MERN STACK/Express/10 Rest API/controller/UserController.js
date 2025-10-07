import UserSchema from "../model/UserSchema.js";
export const viewAllUserController = async (request,response)=>{
    try{
        const res = await UserSchema.find();
        response.json({message:"Data fetched successfully",data:res});
    }catch(error){
        console.log("Error : "+error);
    }
}

export const addUserController = async(request,response)=>{
    try{
        const res = await UserSchema.create(request.body);
        console.log("Result : ",res);
        response.json({message:"User Added Successfully"});
    }catch(error){
        console.log("Error : "+error);
    }
}

export const updateUserController = async (request,response)=>{
    try{
        const email = request.params.email;
        const updateData = {
            $set : {
                username:"simon Jackson"
            }
        }
        // const res = await UserSchema.findByIdAndUpdate({_id:email},updateData);
        const res = await UserSchema.updateOne({_id:email},updateData);

        console.log("res : ",res);
        console.log("Data updated successfully");
        response.json({message:"Data updated successfully"});
    }catch(error){
        console.log("Error : "+error);
    }
}

export const deleteUserController = (request,response)=>{
    try{

    }catch(error){
        console.log("Error : "+error);
    }
}