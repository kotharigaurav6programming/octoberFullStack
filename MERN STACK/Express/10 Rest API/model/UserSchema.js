import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    _id:{
        type:String,
        required : true
    },
    password : {
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

export default mongoose.model('userSchema',UserSchema,'user');