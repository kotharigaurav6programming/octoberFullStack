import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        console.log("Connection established successfully");

        var db = dbInstance.db("octmongodb");
        console.log("Database created successfully");

        await db.createCollection("Employer");
        var data = await db.collection("Employer").find().toArray();

        console.log(data);
        // console.table(data);
        
    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();
