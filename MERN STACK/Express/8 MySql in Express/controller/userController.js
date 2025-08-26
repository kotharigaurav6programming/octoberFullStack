import con from "../connection/dbConfig.js";
import { message, status } from "../utility/status_message.js";
export const addUserController = (request,response)=>{
    try{
        var values = [
            request.body.username,
            request.body.email,
            request.body.password,
            request.body.address
        ]
        const query = 'insert into user(username,email,password,address) values (?,?,?,?)';
        con.query(query,values,(error,result)=>{
            if(error){
                console.log("Error while adding user : "+error);
                response.render("login.ejs",{message:message.ERROR,status:""});                
            }
            else{
                console.log("Data Added successfully");
                response.render("login.ejs",{message:message.ADMIN_VERIFICATION_REQUIRED,status:status.SUCCESS});
            }
        });
    }catch(error){
        console.log("Error : "+error);
        response.render("login.ejs",{message:message.ERROR,status:status.ERROR});
    }
}