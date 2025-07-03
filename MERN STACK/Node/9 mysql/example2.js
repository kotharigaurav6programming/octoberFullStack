// example to take values from user

var readLine = require("readline");
var instance = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

instance.question("Enter num1 : ",(num1)=>{
   instance.question("Enter num2 : ",(num2)=>{
    instance.question("Enter num3 : ",(num3)=>{
        console.log("Sum : "+(parseInt(num1)+parseInt(num2)+parseInt(num3)));
    });
   }); 
});