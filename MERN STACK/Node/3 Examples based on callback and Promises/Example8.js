// Example showing the concept of promises

function checkNum(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Even Number") : reject("Odd Number");
    });
}
const obj = checkNum(46);
obj.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log("Error : "+error);
});