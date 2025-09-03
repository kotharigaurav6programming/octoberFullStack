import con from "../connection/dbConfig.js";
import { message, status } from "../utility/status_message.js";
import moment from 'moment';
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

export const userLoginController = (request,response)=>{
    try{
        const values = [
            request.body.email,
            request.body.password,
            1,0
        ];
        const query = `select * from user where email = ? and password = ? and adminVerify=? and block=?`;
        con.query(query,values,(error,result)=>{
            if(error)
                throw error;
            else{
                console.log("Result : ",result);
                if(result.length==0){
                    response.render("login.ejs",{message:"Either email or password is wrong or Contact Admin to Proceed Further"});
                }else{
                    request.session.email=request.body.email;
                    request.session.save();
                    response.render("userHome.ejs",{email:request.body.email});
                }
            }
        });
    }catch(error){
        console.log("Error in userLoginController : "+error);
    }
} 

export const addToDoTaskController = (request,response)=>{
    try{
        const query = "select * from user where email=?";
        const value = [request.session.email];
        con.query(query,value,(error,result)=>{
            if(error)
                throw error;

            const query = 'insert into todo(userid,description,priority,date,time) values(?,?,?,?,?)';
            const userid = result[0].userid;
            const description = request.body.description;
            
            var priority;
            if(request.body.priority=="High")
                priority = 1;
            if(request.body.priority=="Moderate")
                priority = 2;
            if(request.body.priority=="Medium")
                priority = 3;
            

            const date = moment(new Date()).format("DD-MM-YYYY");
            const time = moment(new Date()).format("hh:mm:ss a");
            const values = [userid,description,priority,date,time];
            
            con.query(query,values,(error,result)=>{
                if(error)
                    throw error;

                console.log("Result of todo : ",result);
                response.render("addToDoForm.ejs",{message:"Task Added Successfully",email:request.session.email});
            });
        });       
    }catch(error){
        console.log("Error in addToDoTaskController : ",error);
    }
}