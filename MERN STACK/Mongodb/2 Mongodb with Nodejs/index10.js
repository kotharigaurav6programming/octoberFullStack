import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        console.log("Connection established successfully");

        var db = dbInstance.db("octmongodb");
        console.log("Database created successfully");

        await db.createCollection("Employer");
        // db.Employer.find({},{name:1,salary:1}).sort({salary:-1}).toArray()[0];
        var data = await db.collection("Employer").find().sort({salary:-1}).toArray();
        console.log(data[0].salary+"  "+data[0].name);
        
    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();
