import mongoose, { Schema, model, models } from "mongoose";

const user = new Schema({
    id:{
        type:String,
        required:true,
        immutable:true
    },
    image:{
        type:String,
        default:"",
    },
    name:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        immutable:true,
        required:true
    },
    loggedIn:{
        type:Boolean,
        default:true

    },
    phNo:{
        type:Number,
        default:null,
        length:10
    },



})

const userModel = models.user ||  mongoose.model("user",user)
export default userModel
