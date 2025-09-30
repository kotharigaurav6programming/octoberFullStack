import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        // console.log(dbInstance);
        console.log("Connection established successfully");
        
    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();