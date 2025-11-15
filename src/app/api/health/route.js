import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const serverTime = new Date().toISOString();
  
  try {
    // Check database connectivity
    let dbStatus = "connected";
    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch (dbError) {
      dbStatus = "disconnected";
      console.error("Database health check failed:", dbError);
    }

    const healthCheck = {
      status: dbStatus === "connected" ? "healthy" : "degraded",
      timestamp: serverTime,
      service: "Portfolio API",
      version: "1.0.0",
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development",
      checks: {
        database: dbStatus,
        api: "healthy"
      }
    };

    const statusCode = dbStatus === "connected" ? 200 : 503;

    return NextResponse.json(healthCheck, {
      status: statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        timestamp: serverTime,
        error: "Health check failed",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 503 }
    );
  }
}