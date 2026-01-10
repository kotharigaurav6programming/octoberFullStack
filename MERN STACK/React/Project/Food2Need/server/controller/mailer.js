import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const mailer = function(_id,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.USER,
            pass:process.env.PASS
        }
    });

    const mailOption = {
        from : process.env.USER,
        to : _id,
        subject: "Verification Mail | Attention Required",
        html : `Hello ${_id}, Its a <b>Verification Mail</b>, You need to verify yourself by clicking on the below button. 
        <form action=${process.env.MAIL_URL} method='post'>
            <input type="hidden" value='${_id}' name="_id"> 
            <button style='height:25px;width:250px;background-color:#234567;color:white;border-width:0px;'>Click To Verify</button>
        </form>`
    }

    transport.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log("Error occured in mailer : ",error);
            callback(false);            
        }else{
            console.log("Mail sent from Mailer");
            callback(info);
        }
    });
}

export default {mailer:mailer};