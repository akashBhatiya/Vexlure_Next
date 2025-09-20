import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog, { IBlog } from '@/models/Blog';

// Blog interface for API responses
export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  author?: string;
  readTime?: string;
  category: string;
  image: string;
  subImage?: string;
  tags: string[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

// GET - Fetch all blogs
export async function GET(request: NextRequest) {
  try {
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('MongoDB connected successfully');
    
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    
    // Build query based on published status
    let query = {};
    if (published === 'true') {
      query = { published: true };
    } else if (published === 'false') {
      query = { published: false };
    }
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .lean();
    
    // Ensure all blogs have tags field
    const blogsWithTags = blogs.map(blog => {
      const blogData = blog as any;
      return {
        ...blogData,
        tags: blogData.tags || []
      };
    });
    

    return NextResponse.json({
      success: true,
      data: blogsWithTags,
      count: blogsWithTags.length
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch blogs',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST - Create new blog
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, description, content, author, readTime, category, image, subImage, tags = [], published = false } = body;
    

    // Validation
    if (!title || !description || !content || !image || !category) {
      return NextResponse.json(
        { success: false, error: 'Title, description, content, category, and image are required' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return NextResponse.json(
        { success: false, error: 'A blog with this title already exists' },
        { status: 400 }
      );
    }

    // Create new blog
    const newBlog = new Blog({
      title,
      description,
      content,
      author: author || 'Vexlure Staff',
      readTime: readTime || '5 min read',
      category,
      image,
      subImage,
      tags: Array.isArray(tags) ? tags : [],
      slug,
      published: Boolean(published)
    });

    const savedBlog = await newBlog.save();

    return NextResponse.json({
      success: true,
      data: savedBlog,
      message: 'Blog created successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

// PUT - Update existing blog
export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, title, description, content, author, readTime, category, image, subImage, tags, published } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Blog ID is required' },
        { status: 400 }
      );
    }

    // Find blog by ID
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    // Update fields
    if (title) {
      blog.title = title;
      blog.slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
    if (description) blog.description = description;
    if (content) blog.content = content;
    if (author !== undefined) blog.author = author;
    if (readTime !== undefined) blog.readTime = readTime;
    if (category) blog.category = category;
    if (image) blog.image = image;
    if (subImage !== undefined) blog.subImage = subImage;
    if (tags !== undefined) blog.tags = Array.isArray(tags) ? tags : [];
    if (published !== undefined) blog.published = Boolean(published);

    const updatedBlog = await blog.save();

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: 'Blog updated successfully'
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog
export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Blog ID is required' },
        { status: 400 }
      );
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
