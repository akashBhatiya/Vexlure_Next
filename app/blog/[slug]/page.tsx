"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface BlogPost {
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
  slug: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

const relatedPosts = [
  {
    id: "customer-feedback-reflects-commitment-excellence",
    category: "Soil Health",
    title: "Customer Feedback That Reflects Our Commitment to Excellence",
    readTime: "4 min read",
    date: "12 Jan 2025",
    image: "/agriculture/spices.png"
  },
  {
    id: "customer-feedback-reflects-commitment-excellence-2",
    category: "Soil Health", 
    title: "Customer Feedback That Reflects Our Commitment to Excellence",
    readTime: "4 min read",
    date: "12 Jan 2025",
    image: "/agriculture/spices.png"
  },
  {
    id: "customer-feedback-reflects-commitment-excellence-3",
    category: "Organic Farming",
    title: "Customer Feedback That Reflects Our Commitment to Excellence", 
    readTime: "4 min read",
    date: "12 Jan 2025",
    image: "/agriculture/spices.png"
  }
];

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log('Fetching blog with slug:', slug);
        const response = await fetch(`/api/blogs/${slug}`);
        const result = await response.json();
        console.log('Blog API response:', result);
        
        if (result.success) {
          setBlog(result.data);
          
          // Fetch related blogs
          const relatedResponse = await fetch('/api/blogs?published=true');
          const relatedResult = await relatedResponse.json();
          console.log('Related blogs response:', relatedResult);
          
          if (relatedResult.success) {
            // Filter out current blog and take first 3
            const related = relatedResult.data
              .filter((b: BlogPost) => b.slug !== slug)
              .slice(0, 3);
            setRelatedBlogs(related);
          }
        } else {
          console.error('Blog not found:', result.error);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-gray-600">Loading blog...</div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--black)] mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-[var(--orange)] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      
      {/* Blog Post Content */}
      <section className="pt-20 bg-[var(--white)]">

        {/* Main Content */}
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-[var(--black)]">• {blog.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] leading-tight mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--black)]">
                    VS
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[var(--black)]">Vexlure Staff</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[var(--gray-text)]">•</span>
                <span className="text-[var(--gray-text)]">{formatDate(blog.createdAt)}</span>
                <span className="text-[var(--gray-text)]">•</span>
                <span className="text-[var(--gray-text)]">5 min read</span>
              </div>
              
              {/* Social Share Icons - Mobile and Desktop */}
              <div className="flex items-center gap-3 mt-2">
                <button className="w-10 h-10 bg-[var(--orange)]/10 rounded-full flex items-center justify-center hover:bg-[var(--orange)]/20 transition-colors">
                  <svg className="w-5 h-5 text-[var(--orange)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[var(--orange)]/10 rounded-full flex items-center justify-center hover:bg-[var(--orange)]/20 transition-colors">
                  <svg className="w-5 h-5 text-[var(--orange)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[var(--orange)]/10 rounded-full flex items-center justify-center hover:bg-[var(--orange)]/20 transition-colors">
                  <svg className="w-5 h-5 text-[var(--orange)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-[var(--orange)]/10 rounded-full flex items-center justify-center hover:bg-[var(--orange)]/20 transition-colors">
                  <svg className="w-5 h-5 text-[var(--orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = '/image/industry-agriculture.png';
              }}
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed mb-6">
              {blog.description}
            </div>
            <div className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed mb-6 whitespace-pre-wrap">
              {blog.content}
            </div>
            
            {/* Sub Image if available */}
            {blog.subImage && (
              <div className="my-8">
                <Image
                  src={blog.subImage}
                  alt="Additional content image"
                  width={800}
                  height={400}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.src = '/image/industry-agriculture.png';
                  }}
                />
              </div>
            )}
          </article>

          {/* Tags Section */}
          <div className="mt-12 mb-12">
            <h3 className="text-lg font-semibold text-[var(--black)] mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {blog.metaKeywords && blog.metaKeywords.split(',').map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[var(--secondary-bg)] text-[var(--black)] rounded-full text-sm hover:bg-[var(--orange)]/10 transition-colors cursor-pointer"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-[var(--orange)] mb-4 block">• The Blog</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--black)]">You may also like these</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog._id}
                  href={`/blog/${relatedBlog.slug}`}
                  className="group block"
                >
                  <div className="relative mb-4">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      width={400}
                      height={250}
                      className="w-full h-[200px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/image/industry-agriculture.png';
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                      {formatDate(relatedBlog.createdAt)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-[var(--orange)] font-medium">{relatedBlog.category}</span>
                    <span className="text-sm text-[var(--gray-text)]"> • 5 min read</span>
                    <h3 className="font-bold text-[var(--black)] group-hover:text-[var(--orange)] transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
