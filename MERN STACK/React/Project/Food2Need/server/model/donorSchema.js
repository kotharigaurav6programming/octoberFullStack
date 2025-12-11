import moment from 'moment';
import mongoose from 'mongoose';
const donorSchema = mongoose.Schema({
    userId : {
        type: String,
        required : true
    },
    username : {
        type: String,
        required : true
    },
    _id : {
        type: String,
        required : true,
        unique:true
    },
    password : {
        type : String,
        required : true 
    },
    contact : {
        type: String,
        required : true
    },
    status : {
        type: Boolean,
        required : true,
        default:true
    },
    createdAt : {
        type: String,
        required : true,
        default : ()=> moment().format("DD/MM/YYYY")
    },
    uploadedAT : {
        type : String,
        required : true,
        default : ()=> moment().format("hh:mm:ss A")
    }
});

export default mongoose.model('donorSchema',donorSchema,'donor');