import mongoose from 'mongoose';
import moment from 'moment';
const ngoSchema = mongoose.Schema({
    ngoId : {
        type: String,
        required : true
    },
    ngoName : {
        type: String,
        required : true
    },
    _id : {
        type: String,
        required : true
    },
    password : {
        type : String,
        required : true 
    },
    contact : {
        type: String,
        required : true
    },
    category : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    ngoPic : {
        type: String,
        required : true
    },
    status : {
        type: String,
        default : true    
    },
    emailVerify : {
        type: String,
        default:false
    },
    adminVerify : {
        type: String,
        default : false
    },
    createdAt : {
        type: String,
        default : ()=> moment().format("DD/MM/YYYY")
    },
    uploadedAT : {
        type : String,
        default : ()=> moment().format("hh:mm:ss A")
    }
});

export default mongoose.model('ngoSchema',ngoSchema,'ngo');