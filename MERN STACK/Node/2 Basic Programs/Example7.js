// example showing the concept of callback

function myFunction(callback){
    console.log("Inside myFunction");
    callback();
}
function display(){
    console.log("This is an example of callback");
}
myFunction(display);