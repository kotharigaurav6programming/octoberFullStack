import moment from 'moment';
import mongoose from 'mongoose';
const surplusFoodSchema = mongoose.Schema({
    surplusId : {
        type: String,
        required : true
    },
    userId : {
        type: String,
        required : true
    },
    functionName : {
        type: String,
        required : true
    },
    contact : {
        type: String,
        required : true
    },
    venue : {
        type: String,
        required : true
    },
    items : {
        type: String,
        required : true
    },
    quantity : {
        type: Number,
        required : true
    },
    pickupdate : {
        type: String,
        required : true,
        default : ()=> moment().format("DD/MM/YYYY")
    },
    pickuptill : {
        type: String,
        required : true
    },
    category : {
        type: String,
        required : true
    },
    foodPic:{
        type:String,
        required:true
    },
    donateStatus : {
        type: Boolean,
        default:true
    },
    allocatedNgoId : {
        type: String,
        default:""
    },
    status : {
        type: Boolean,
        default:true
    },
    createdAt : {
        type: String,
        default : ()=> moment().format("DD/MM/YYYY")
    }
});

export default mongoose.model('surplusFoodSchema',surplusFoodSchema,'surplusFood');