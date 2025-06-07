// Example showing the concept of callback

function myFun(array,callback){
    callback(array.sort((a,b)=>{
        return a-b;
    }));
}
var array = [34,111,90,4,345,21];
function printData(res){
    console.log("Array in ascending order : "+res);
}
myFun(array,printData);