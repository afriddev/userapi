import connectDB from "@/libs/mongoDb/mongoDb";
import userModel from "@/models/user";
export const revalidate = 0; //must
import { NextResponse } from "next/server";
export  async function POST(req:Request){

    try{
        await connectDB()
        const {email} = await req.json()
        try{
            const data = await userModel.findOne({email:email})
            if(data.length == 1){
                return NextResponse.json({
                    message:"success",
                    data:data
                })
            }
            else{
                return NextResponse.json({
                    message:"notFound"
                })

            }

        }
        catch(e){
            return NextResponse.json({
                message:e
            })
        }
        
        
    }
    catch(e){
        
        return NextResponse.json({
            message:e
        })
        
    }

}
