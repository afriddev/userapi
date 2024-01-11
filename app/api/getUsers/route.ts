import connectDB from "@/libs/mongoDb/mongoDb";
import userModel from "@/models/user";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        connectDB()
        try{
            const users = userModel.find()
            return NextResponse.json({
                message:"success",
                users:users
            })

        }catch(e){
            return NextResponse.json({
                message:e.errors.email.name
            })
        }
        
    }
    catch(e){
        return NextResponse.json({
            message:"dataBaseErro"
        })
    }

}