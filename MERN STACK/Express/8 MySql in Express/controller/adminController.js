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
                request.session.email=request.body.email;
                request.session.save();
                response.render("adminHome.ejs",{email:request.body.email});
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