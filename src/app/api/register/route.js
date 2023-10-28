import Student from "@/src/models/studentModel";

import { connect } from "@/src/dbconfig/dbconfig";

import { NextResponse,NextRequest } from "next/server";

export async function POST(request){
    try{
        await connect();

        const reqBody=await request.json();
        console.log(reqBody);
        const {name,usn,branch,email}=reqBody;

        const newStud=Student({
            name,
            usn,
            branch,
            email
        })

        console.log(newStud);

        const savedUser=await newStud.save();
        console.log(savedUser);

        return NextResponse.json({
            message:"Created User successfully",
            success:true,
            savedUser
        })
    }
    catch(error){
        console.log("error");
        console.log(error.message);
        return NextResponse.json({message:error.message},{status:500})
    }
}