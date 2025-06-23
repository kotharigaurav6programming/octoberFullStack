// example showing the concept of custom event

var events = require("events");
class MyClass extends events{}

const eventEmitter = new MyClass();

eventEmitter.on('myEvent',()=>{
   console.log("This is my example");
});
eventEmitter.emit('myEvent');