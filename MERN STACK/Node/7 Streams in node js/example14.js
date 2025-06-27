// example showing the concept of streams
var {Duplex} = require('stream');
// console.log(typeof Duplex);
// var path = 'myFolder/myFile.txt';

const duplexStream = new Duplex({
    write(data){
        chunk = data;
        console.log("This is my data to be print : "+data);
    },
    read(){
        this.push(chunk);
        this.push(null);
    }
});

duplexStream.write("This is an example of duplex stream");
duplexStream.on('data',(chunk)=>{
    console.log(chunk.toString());
});

