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

const myData = (obj)=>{
    return new Promise((resolve,reject)=>{
        var hobbies = ['Cricket','Football','BasketBall'];
        obj.hobbies = hobbies;
        resolve(obj);
    });
}

const myFunction = async()=>{
    try{
        const object = await myFun();
        const obj = await myData(object);
        console.log("Name : "+obj.name);
        console.log("Age : "+obj.age);
        console.log("Address : "+obj.address);
        console.log("Hobbies : "+obj.hobbies);    
    }catch(error){
        console.log("Error : "+error);
    }
}
myFunction();
