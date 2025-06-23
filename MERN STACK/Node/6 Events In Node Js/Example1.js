// example showing the concept of custom event

var events = require("events");
// console.log(events);
var eventEmitter = new events();

eventEmitter.on('customEvent',function(){
    console.log("This is my First custom event example");
});

eventEmitter.emit('customEvent');

