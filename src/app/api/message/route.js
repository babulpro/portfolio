
import { NextResponse } from "next/server"; 
import prisma from "@/lib/prisma";





export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
     
    const data = await req.json(); 

    const message=await prisma.message.create({
      data:{
        ...data
      }
    })
    
     return NextResponse.json(
      { status: "success", msg: "User created successfully",message },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { status: "fail", msg: e || "Failed to create user"    },
      { status: 500 }
    );
  }
}



 