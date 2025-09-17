import student from "../model/userSchema.js";

export const addStudentController = async (request,response)=>{
    try{
        const res =  await student.create(request.body);
        // console.log("-----------------> ",res);
        if(res.dataValues)
            response.render("index.ejs",{message:"Data Added Successfully"});
        else
            response.render("index.ejs",{message:"Error while Adding Data"});
    }catch(error){
        console.log("Error while adding student");
    }
}