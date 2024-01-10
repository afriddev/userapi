import mongoose, { Schema, model, models } from "mongoose";

const user = new Schema({
    name:{
        type:String,
        minLength:3,
        immutable:true
    },
    email:{
        type:String,
        minLength:10,
        immutable:true
    },

    
})

const userModel = models.user || mongoose.model("user",user)
export default userModel