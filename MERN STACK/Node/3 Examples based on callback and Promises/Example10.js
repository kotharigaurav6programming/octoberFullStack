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
const fun1 = (obj)=>{
    var hobbies = ['Cricket','Football','BasketBall'];
    obj.hobbies = hobbies;
    return obj;
}
const fun2 = (obj)=>{
    console.log("Name : "+obj.name);
    console.log("Age : "+obj.age);
    console.log("Address : "+obj.address);
    console.log("Hobbies : "+obj.hobbies);    
}
const fun3 = (error)=>{
     console.log("Error : "+error);
}

data.then(fun1)
        .then(fun2)
            .catch(fun3)