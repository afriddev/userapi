import mongoose from "mongoose";
import mogoDbUrl from "../credentials/credentials";
const connectDB = ()=>{
    mongoose.connect(mogoDbUrl)
   
}


export default connectDB