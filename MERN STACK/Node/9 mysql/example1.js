// example to take values from user

var readLine = require("readline");
var instance = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

instance.question("Enter name : ",(name)=>{
    console.log("Name : "+name);
    instance.close();
});