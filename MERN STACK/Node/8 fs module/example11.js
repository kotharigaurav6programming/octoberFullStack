// example showing the concept of fs module

var fs = require('fs');
var fileName = 'record.txt';

var data = fs.readFileSync(fileName,'utf-8');
// console.log(data);
var res=0;
var name;
for(var i=0;i<=data.length;i++){
    // console.log(data[i]);
    if(data[i]=="\n"){
        name = data.slice(res,i);
        console.log("\nFile name : "+name);
        res = i+1;
        console.log("Content of file : "+fs.readFileSync(name,'utf-8'));    
    }
}

