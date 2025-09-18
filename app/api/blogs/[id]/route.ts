
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import mongoose from "mongoose";

// GET - Fetch single blog by ID or slug
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const {id} = await context.params;
    console.log("Fetching blog with ID/slug:", id);

    await connectDB();
    let blog;

    // Check if id is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      // Try to find by ObjectId first, then by slug
      blog = await Blog.findOne({
        $or: [{ _id: id }, { slug: id }],
      }).lean();
    } else {
      // If not a valid ObjectId, search only by slug
      blog = await Blog.findOne({ slug: id }).lean();
    }

    console.log("Blog found:", blog ? "Yes" : "No");

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch blog",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
