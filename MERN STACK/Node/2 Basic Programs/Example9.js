// example showing the concept of callback

function gotoroom(callback){
    console.log("gotoroom");
    callback(wonprize);
}
function removegarbage(callback){
    console.log("removegarbage");
    callback();
}
function wonprize(){
    console.log("wonprize");
}
gotoroom(removegarbage);