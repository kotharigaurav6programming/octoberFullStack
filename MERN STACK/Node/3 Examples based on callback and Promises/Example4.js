// Example showing the concept of callback

function myFun(status1,callback){
    console.log("\n"+status1+"\n");
    setTimeout(()=>{
        var obj = {
            name : "Andrew Anderson",
            salary : 89000,
            age : 24
        }
        callback(obj);
    },4000);
} 
const status1 = "Loading....";
const printData = (msg)=>{
    console.log(`Hello ${msg.name}, your age is ${msg.age} and you earn $${msg.salary} per annum`);
}
myFun(status1,printData);