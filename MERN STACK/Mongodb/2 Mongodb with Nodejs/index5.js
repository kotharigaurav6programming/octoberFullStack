import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        console.log("Connection established successfully");

        var db = dbInstance.db("octmongodb");
        console.log("Database created successfully");

        await db.createCollection("Employer");
        var obj = [{
            name:"Mathew Math",
            age : 21,
            salary : 6417,
            address : "Bhopal, Madhya Pradesh"
        },{
            name:"Jack Jackson",
            age : 23,
            salary : 124567,
            address : "Indore, Madhya Pradesh"
        },{
            name:"Simon Sim",
            age : 56,
            salary : 34567,
            address : "Indore, Madhya Pradesh"
        },{
            name:"Jackky Jack",
            age : 50,
            salary : 4567,
            address : "Bhopal, Madhya Pradesh"
        }];

        await db.collection("Employer").insertMany(obj);
        console.log("Data inserted successfully");
        
    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();