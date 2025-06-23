// example showing the concept of custom event

var events = require("events");
// console.log(events);
var eventEmitter = new events();

const listenerFun = function(){
    console.log("This is my First custom event example");
}
eventEmitter.on('customEvent',listenerFun);
eventEmitter.on('customEvent',listenerFun);
eventEmitter.on('customEvent',listenerFun);

eventEmitter.emit('customEvent');

