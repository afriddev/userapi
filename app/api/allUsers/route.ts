import connectDB from "@/libs/mongoDb/mongoDb";
import userModel from "@/models/user";
import { NextResponse } from "next/server";
export const revalidate = 1; //must
export async function GET(){
    try{
        await connectDB()
        try{
            const users = await userModel.find({})
            if(users.length > 0){
                return NextResponse.json({
                    message:"success",
                    users:users
                })
            }
            else{
                return NextResponse.json({
                    message:"noUsersFound"
                })
    
            }
            
        }catch(e){
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