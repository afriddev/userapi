import connectDB from "@/libs/mongoDb/mongoDb";
import userModel from "@/models/user";
import { NextResponse } from "next/server";

export  async function GET(){

    try{
        await connectDB()

        const data = await userModel.find({})
        return NextResponse.json({
            message:"success",
            data:data
        })
        
    }
    catch(e){
        
        return NextResponse.json({
            message:e
        })
        
    }

}