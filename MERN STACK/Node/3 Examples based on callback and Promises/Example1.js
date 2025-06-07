// Example showing the concept of callback

function myFun(msg,callback){
    setTimeout(()=>{
        callback(msg);
    },3000);
}

var message = "Email Sent";
function printData(message){
    console.log(message+"\nTask Completed");
}
myFun(message,printData);