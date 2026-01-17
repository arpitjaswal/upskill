import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    user_id:{
        type: Number,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
    created_at:{
        type:Number
    },
},{
    timestamp:true
})

const user = mongoose.model('user',userSchema)

export default user;