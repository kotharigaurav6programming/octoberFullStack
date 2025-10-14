import nodemailer from 'nodemailer';
const mailer = function(email,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'shikha707pandey@gmail.com',
            pass:'stey axhz mhdd intz'
        }
    });

    const mailOption = {
        from : 'shikha707pandey@gmail.com',
        to : email,
        subject: "Verification Mail | Attention Required",
        html : `Hello ${email}, Its a <b>Verification Mail</b>, You need to verify yourself by clicking on the below button. 
        <form action="http://localhost:3000/user/verifyEmail" method='post'>
            <input type="hidden" value='${email}' name="email"> 
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