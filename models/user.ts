import mongoose, { Schema, model, models } from "mongoose";

const user = new Schema({
    name:{
        type:String,
        minLength:3
    },
    email:{
        type:String,
        minLength:10,
        immutable:true,
        required:true
    },
    loggedIn:{
        type:Boolean,
        required:true,
    },
    phNo:{
        type:Number,
        default:1234567890,
        length:10
    }

    
})

const userModel = models.user || mongoose.model("user",user)
export default userModel