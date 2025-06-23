// example showing the concept of custom event

var events = require("events");
var eventEmitter = new events();

const listenerFun1 = function(){
    console.log("This is my First custom event example1");
}
const listenerFun2 = function(){
    console.log("This is my First custom event example2");
}
const listenerFun3 = function(){
    console.log("This is my First custom event example3");
}
eventEmitter.on('customEvent',listenerFun1);
eventEmitter.on('customEvent',listenerFun2);
eventEmitter.on('customEvent1',listenerFun3);

// eventEmitter.removeAllListeners();
eventEmitter.removeAllListeners('customEvent');

eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent1');

const arr = eventEmitter.listeners('customEvent');
console.log(arr.length);

const arr1 = eventEmitter.listeners('customEvent1');
console.log("customeEvent 1 : "+arr1.length);
