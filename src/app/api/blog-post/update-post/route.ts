import prisma from "@/database";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const blogID = url.searchParams.get("blogID");
    console.log(blogID);
     
    const extractPostData = await request.json();
    const newlyCreatedPost = await prisma.post.update({
      data: extractPostData,
      where: { id: Number(blogID) }
    });

    console.log(extractPostData, "extractPostData");

    if (newlyCreatedPost) {
      return NextResponse.json({
        success: true,
        message: "Update blog post added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong ! Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}