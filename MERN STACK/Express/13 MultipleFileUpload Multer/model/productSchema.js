import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    profileOne:{
        type:[String],
        required:true
    },
    profileTwo:{
        type:[String],
        required:true
    }

});

export default mongoose.model('ProductSchema',ProductSchema,'product1');