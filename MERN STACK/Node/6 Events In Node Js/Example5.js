// example showing the concept of custom event

var events = require("events");
var eventEmitter = new events();

const listenerFun = function(){
    console.log("This is my First custom event example");
}

eventEmitter.once('customEvent',listenerFun);

eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');

