import mongoose from "mongoose";
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
    emailVerified:{
        type:String,
        default : "Not Verified"
    }
});

export default mongoose.model('UserSchema',UserSchema,'user');