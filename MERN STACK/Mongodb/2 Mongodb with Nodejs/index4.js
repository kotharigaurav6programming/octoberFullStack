import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        console.log("Connection established successfully");

        var db = dbInstance.db("octmongodb");
        console.log("Database created successfully");

        await db.createCollection("Employer");
        var obj = {
            name:"Peter Parker",
            age : 32,
            salary : 64567,
            address : "Ujjain, Madhya Pradesh"
        };

        await db.collection("Employer").insertOne(obj);
        console.log("Data inserted successfully");
        
    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();