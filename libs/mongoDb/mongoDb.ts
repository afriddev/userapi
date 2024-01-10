import * as mongoose from "mongoose";
import mongoDbUrl from "../credentials/credentials";
async function connectDB(){
    await mongoose.connect(mongoDbUrl)
    .then(
        ()=>{
        }
    )
    .catch(()=>{
        console.log("error")
    })
}

export default connectDB