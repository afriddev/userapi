import userLogs from "@/data/userLogs";
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message:"success",
        data:userLogs
    })
}