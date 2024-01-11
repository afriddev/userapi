import connectDB from "@/libs/mongoDb/mongoDb";
import userModel from "@/models/user";
import { NextResponse } from "next/server";
export  async function POST(req:Request){

    try{
        await connectDB()
        const {email} = await req.json()
        try{
            const data = await userModel.findOne({email:email})
        return NextResponse.json({
            message:"success",
            data:data
        })

        }
        catch(e){
            return NextResponse.json({
                message:e.errors.email.name
            })
        }
        
        
    }
    catch(e){
        
        return NextResponse.json({
            message:e.message
        })
        
    }

}
