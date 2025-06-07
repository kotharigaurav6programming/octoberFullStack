// Example showing the concept of callback

function myFun(i,callback){
    let x = setInterval(()=>{
        if(i<=10)
            callback(i);
        else{
            console.log("Finish");
            clearInterval(x);
        }
        i++;
    },1000);
}

let i = 1;
function printData(i){
    console.log(i+"\n");
}
myFun(i,printData);