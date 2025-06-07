// example showing the concept of callback

function myFunction(a,b,callback){
    const sum = a+b;
    callback(sum);
}
const result = (res)=>{
    console.log("Addition : "+res);
}
myFunction(100,200,result);