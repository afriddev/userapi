import connectDB from "@/libs/mongoDb/mongoDb"
import userModel from "@/models/user"
import { NextResponse } from "next/server"

export async function POST(req:Request){

    try{
        await connectDB()
        const {name,email,phNo,loggedIn} = await req.json()
        console.log(name,email,phNo,loggedIn)

        if(name === undefined || email === undefined || loggedIn === undefined){
            return NextResponse.json({
                message:"wrongInput"
            })
        }
        else{
            try{
               await userModel.create({
                    "name":name,
                    'loggedIn':loggedIn,
                    "email":email,
                    "phNo":phNo
                })
                return NextResponse.json({
                    message:"cretaed"
                })

            }
            catch(e){
                return NextResponse.json({
                    message:e.errors
                })

            }
        }
    }catch(e){
        return NextResponse.json({
            message:e
        })
    }






}