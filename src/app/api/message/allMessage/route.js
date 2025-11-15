
import { NextResponse } from "next/server"; 
import prisma from "@/lib/prisma";
 

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json({
      status: "success",
      data: messages
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    
    return NextResponse.json(
      { 
        status: "error", 
        message: "Failed to fetch messages"
      },
      { status: 500 }
    );
  }
}













 

export async function DELETE(req) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const id = searchParams.get('id');
    

    await prisma.message.delete({
      where: { id }
    });
    
    return NextResponse.json({
      status: "success",
      message: "Message deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting message:", error);
    
    return NextResponse.json(
      { 
        status: "error", 
        message: "Failed to delete message"
      },
      { status: 500 }
    );
  }
}






export async function PATCH(req) {
  try {
      const searchParams = new URL(req.url).searchParams;
        const id = searchParams.get('id');
    const body = await req.json();

    const message = await prisma.message.update({
      where: { id },
      data: body
    });
    
    return NextResponse.json({
      status: "success",
      data: message
    });
  } catch (error) {
    console.error("Error updating message:", error);
    
    return NextResponse.json(
      { 
        status: "error", 
        message: "Failed to update message"
      },
      { status: 500 }
    );
  }
}