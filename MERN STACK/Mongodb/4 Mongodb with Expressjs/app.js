import express from 'express';
import { MongoClient } from 'mongodb';
var mongoURL = "mongodb://127.0.0.1:27017/";
var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.post("/viewInfoPost",async (request,response)=>{
    const data = request.body;
     const dbInstance = await MongoClient.connect(mongoURL);
     const db = dbInstance.db("oct630");
     await db.collection("user1").insertOne(data);
     console.log("Data inserted successfully");
     response.send("Data inserted successfully");
});

app.listen(3000, () => {
    console.log("connection established successfully");
});