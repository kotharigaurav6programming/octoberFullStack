import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        console.log("Connection established successfully");

        var db = dbInstance.db("octmongodb");
        console.log("Database created successfully");

        await db.createCollection("Employer");
        /*
        db.Employer.find({
    salary : {
        $lt : db.Employer.find({
                salary :{
                    $ne : db.Employer.find().sort({salary:-1}).toArray()[0].salary
                }
            }).sort({salary:-1}).toArray()[0].salary
    }
}).sort({salary : -1}).toArray()[0].salary; 
        */
        var data1 = await db.collection("Employer").find().sort({salary:-1}).toArray();
        var fHS = data1[0].salary;

        var data2 = await db.collection("Employer").find({salary :{$ne : fHS}}).sort({salary:-1}).toArray();
        var sHS = data2[0].salary;

        var data3 = await db.collection("Employer").find({salary : {$lt : sHS}}).sort({salary : -1}).toArray(); 
        var tHS = data3[0].salary;

        console.log("First Highest Salary : ",fHS);
        console.log("Second Highest Salary : ",sHS);
        console.log("Third Highest Salary : ",tHS);
        
    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();
