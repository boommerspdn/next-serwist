import { NextResponse } from "next/server";
import prisma from "./../../../lib/prisma";

export async function GET() {
  return Response.json({
    message: `GET method called`,
  });
}
