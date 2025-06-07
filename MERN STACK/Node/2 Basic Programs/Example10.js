// example showing the concept of callback

var num = 10;
function myFunction(num,callback){
    console.log("num : "+num);
    callback(num+2,(num,callback)=>{
        console.log("num : "+num);
        callback(num+2,()=>{
            console.log("End of Program");
        });
    });
}
myFunction(num,(num,callback)=>{
    console.log("num : "+num);
    callback(num+2,(num,callback)=>{
        console.log("num : "+num);
        callback();
    });    
});