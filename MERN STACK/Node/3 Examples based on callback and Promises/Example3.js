// Example showing the concept of callback
function operation(a,b,task,callback){
    var res;
    switch(task.toLowerCase()){
        case "addition" : res = a+b;
                            break;
        case "subtraction" : res = a-b;
                            break;
        case "multiplication" : res = a*b;
                            break;
        case "division" : res = a/b;
                            break;
        case "modulus" : res = a%b;
                            break;
        default : res = "Invalid";
                    break;
    }
    callback(res);
}
var code = "Multiplication";
const printData = (res)=>{
    console.log("Result : "+res);
}
operation(100,123,code,printData);