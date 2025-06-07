// Example showing the concept of promises
function myFun(){
    return new Promise((resolve,reject)=>{
        var obj = {
            name : "Andrew Anderson",
            age : 89,
            address : "Indore, Madhya Pradesh"
        }
        resolve(obj);
    });
}
const data = myFun();
data.then((obj)=>{
    var hobbies = ['Cricket','Football','BasketBall'];
    obj.hobbies = hobbies;
    return obj;
}).then((obj)=>{
    console.log("Name : "+obj.name);
    console.log("Age : "+obj.age);
    console.log("Address : "+obj.address);
    console.log("Hobbies : "+obj.hobbies);    
}).catch((error)=>{
     console.log("Error : "+error);
})