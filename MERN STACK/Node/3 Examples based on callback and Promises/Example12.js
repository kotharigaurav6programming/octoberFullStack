// Example showing the concept of promises

function checkNum(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Even Number") : reject("Odd Number");
    });
}

async function myFun(){
    try{
        const result = await checkNum(45);
        console.log("Result : "+result);
    }catch(error){
        console.log("Result : "+error);
    }
}
myFun();