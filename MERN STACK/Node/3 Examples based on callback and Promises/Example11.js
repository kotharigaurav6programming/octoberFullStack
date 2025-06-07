// Example showing the concept of async await

function simpleInterest(p,r,t){
    return new Promise((resolve,reject)=>{
        resolve((p*r*t)/100);
    });
}

async function myFun(){
    try{
        const res = await simpleInterest(10000,2.34,5);
        console.log("Result : "+res);
    }catch(error){
        console.log("Result(Error) : "+error);
    }
}
myFun();

