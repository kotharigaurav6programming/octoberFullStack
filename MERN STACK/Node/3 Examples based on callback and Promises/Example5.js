// Example showing the concept of callback

function myFun(array,callback){
    callback(array.sort());
}
var array = ["Mango","Banana","Apple"];
function printData(res){
    console.log("Array in ascending order : "+res);
}
myFun(array,printData);