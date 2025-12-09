import Mongoose  from "mongoose";

const urlSchema = new Mongoose.Schema({
shortID:{
    type:String,
    required:true,
    unique:true
},
redirectURL:{
    type:String,
    required:true
},
visitHistory:[{timestamp:{type:Number}}]
},
{timestamps:true})



const URL = Mongoose.model("practice1",urlSchema)

export default URL;