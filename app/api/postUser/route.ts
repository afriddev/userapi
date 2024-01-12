import connectDB from "@/libs/mongoDb/mongoDb";
import validateEmail from "@/libs/validators/emailValidator";
import validateId from "@/libs/validators/idValidator";
import userModel from "@/models/user";
import { error } from "console";
import { NextResponse } from "next/server";
export const revalidate = 1; //must
export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, phNo, loggedIn, image, id } = await req.json();

    if (name === undefined || email === undefined || id === undefined) {
      return NextResponse.json({
        message: "name,email,id Must Be Needed",
      });
    } else {
      if (name.length > 3 && validateEmail(email) && validateId(id)) {
        try {
          await userModel.create({
            name: name,
            loggedIn: loggedIn,
            email: email,
            phNo: phNo,
            image:image,
            id:id

          });
          return NextResponse.json({
            message: "cretaed",
          });
        } catch (e) {
          return NextResponse.json({
            message: e,
          });
        }
      } else {
        if (name.length < 3) {
          return NextResponse.json({
            message: "nameMustBe3Characters",
          });
        } else if (!validateId(id)) {
          return NextResponse.json({
            message: "idMustBeAtleast4characters",
          });
        } else if (!validateEmail(email)) {
          return NextResponse.json({
            message: "invalidEmail",
          });
        }
      }
    }
  } catch (e) {
    return NextResponse.json({
      message: e,
    });
  }
}
