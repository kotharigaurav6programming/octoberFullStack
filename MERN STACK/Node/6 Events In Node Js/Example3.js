// example showing the concept of custom event

var events = require("events");
// import events from 'events';
// console.log(events);
var eventEmitter = new events();

const listenerFun1 = function(){
    console.log("This is my First custom event example 1...");
}
const listenerFun2 = function(){
    console.log("This is my First custom event example 2...");
}
const listenerFun3 = function(){
    console.log("This is my First custom event example 3...");
}

eventEmitter.on('customEvent',listenerFun1);
eventEmitter.on('customEvent',listenerFun2);
eventEmitter.on('customEvent',listenerFun3);

eventEmitter.emit('customEvent');

