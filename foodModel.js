import mongoose from "mongoose";
const foodSchema =new  mongoose.Schema({
    name: {type:String ,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},


})
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)
// this line create the modal again when foodSchema call  so we apply the Or condition to check if exit no new model will be created
export default foodModel;
