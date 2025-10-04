import mongoose from "mongoose";
import express from 'express';
var mongoURL = "mongodb://127.0.0.1:27017/oct630";
var app = express();
mongoose.connect(mongoURL);
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const us = mongoose.model('UserSchema',UserSchema,'user2');

app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.post("/viewInfoPost",(request,response)=>{
    const data = request.body;
    console.log("-------------------------> data : ",data);
    
    // const schema = new us(data);
    // schema.save();
   
    us.create(data);

    response.send("Data inserted successfully");
});

app.listen(3000, () => {
    console.log("connection established successfully");
});