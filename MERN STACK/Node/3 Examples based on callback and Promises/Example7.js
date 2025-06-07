// Example showing the concept of promises

function simpleInterest(p,r,t){
    return new Promise((resolve,reject)=>{
        resolve((p*r*t)/100);
    });
}
const obj = simpleInterest(10000,2.34,5);
obj.then((res)=>{
    console.log("Simple Interest : "+res);
}).catch((error)=>{
    console.log("Error : "+error);
});
