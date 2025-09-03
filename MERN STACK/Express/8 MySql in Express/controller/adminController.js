import { response } from "express";
import con from "../connection/dbConfig.js";
export const adminLoginController = (request,response)=>{
    try{
        const values = [
            request.body.email,
            request.body.password
        ];
        const query = `select * from admin where email = ? and password = ?`;
        con.query(query,values,(error,result)=>{
            if(error)
                throw error;
            else{
                console.log("Admin Result : ",result);
                
                 if(result.length==0){
                    response.render("adminLogin.ejs",{message:"Email or password is wrong"});
                }else{
                request.session.email=request.body.email;
                request.session.save();
                response.render("adminHome.ejs",{email:request.body.email});
                }
                
            }
        });
    }catch(error){
        console.log("Error in adminLoginController : "+error);
    }
} 

export const adminViewUsersListController = (request,response)=>{
    try{
        var query = "select * from user";
        con.query(query,(error,result)=>{
            if(error)
                throw error;
            else{
                // console.log(result);
                response.render("adminViewUsers.ejs",{result,email:request.session.email});
            }
        });
    }catch(error){
        console.log("Error in adminViewUsersListController : "+error);
    }
}
export const adminVerifyUserController = (request,response)=>{
    try{
        var userEmail = request.query.email;
        var query = "update user set adminVerify=? where email = ?";
        var values = [1,userEmail];
        con.query(query,values,(error,result)=>{
            if(error)
                throw error;
            else{
                var query = "select * from user";
                con.query(query,(error,result)=>{
                    if(error)
                        throw error;
                    else{
                        // console.log(result);
                        response.render("adminViewUsers.ejs",{result,email:request.session.email});
                    }
                });
            }
        });
    }catch(error){
        console.log("Error in adminViewUsersListController : "+error);
    }
}

export const adminLogoutController = (request,response)=>{
    try{
        request.session.email=null;
        delete request.session.email;
        request.session.destroy((err)=>{
            if(err)
                throw err;
            response.render("adminLogin.ejs",{message:""});
        });
    }catch(error){

    }
}