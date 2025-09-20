
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import mongoose from "mongoose";

// Extended blog interface for API responses
interface BlogWithTags {
  _id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  image: string;
  subImage?: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  tags?: string[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

// GET - Fetch single blog by ID or slug
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const {id} = await context.params;

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


    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Ensure blog has tags field
    const blogData = blog as any;
    const blogWithTags = {
      ...blogData,
      tags: blogData.tags || []
    };

    return NextResponse.json({
      success: true,
      data: blogWithTags,
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
