import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        console.log("Connection established successfully");

        var db = dbInstance.db("octmongodb");
        console.log("Database created successfully");

        await db.createCollection("Employer");
        var updateField = {
            name : "Andrew Anderson"
        }
        var updatedData = {
            $set : {
                name : "Andy"
            }
        }
        await db.collection("Employer").updateMany(updateField,updatedData);
        console.log("Data updated successfully");
        
    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();