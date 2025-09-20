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

const relatedPosts = [
  {
    id: "customer-feedback-reflects-commitment-excellence",
    category: "Soil Health",
    title: "Customer Feedback That Reflects Our Commitment to Excellence",
    readTime: "4 min read",
    date: "12 Jan 2025",
    image: "/agriculture/spices.png",
  },
  {
    id: "customer-feedback-reflects-commitment-excellence-2",
    category: "Soil Health",
    title: "Customer Feedback That Reflects Our Commitment to Excellence",
    readTime: "4 min read",
    date: "12 Jan 2025",
    image: "/agriculture/spices.png",
  },
  {
    id: "customer-feedback-reflects-commitment-excellence-3",
    category: "Organic Farming",
    title: "Customer Feedback That Reflects Our Commitment to Excellence",
    readTime: "4 min read",
    date: "12 Jan 2025",
    image: "/agriculture/spices.png",
  },
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
        const response = await fetch(`/api/blogs/${slug}`);
        const result = await response.json();

        if (result.success) {
          setBlog(result.data);

          // Fetch related blogs
          const relatedResponse = await fetch("/api/blogs?published=true");
          const relatedResult = await relatedResponse.json();

          if (relatedResult.success) {
            // Filter out current blog and take first 3
            const related = relatedResult.data
              .filter((b: BlogPost) => b.slug !== slug)
              .slice(0, 3);
            setRelatedBlogs(related);
          }
        } else {
          console.error("Blog not found:", result.error);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
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
      <div className="min-h-screen flex items-center justify-center bg-[var(--white)]">
        <div className="text-center">
          {/* Animated Loader */}
          <div className="relative mb-6">
            <div className="w-16 h-16 mx-auto">
              <div className="w-16 h-16 border-4 border-[var(--orange)]/20 border-t-[var(--orange)] rounded-full animate-spin"></div>
            </div>
            <div className="absolute inset-0 w-16 h-16 mx-auto">
              <div className="w-12 h-12 mt-2 ml-2 border-4 border-transparent border-t-[var(--orange)]/60 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
            </div>
          </div>
          
          {/* Loading Text with Animation */}
          <div className="text-xl font-medium text-[var(--black)] mb-2 animate-pulse">
            Loading Blog...
          </div>
          <div className="text-sm text-[var(--gray-text)]">
            Please wait while we fetch the content
          </div>
          
          {/* Animated Dots */}
          {/* <div className="flex justify-center space-x-1 mt-4">
            <div className="w-2 h-2 bg-[var(--orange)] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 bg-[var(--orange)] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 bg-[var(--orange)] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div> */}
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--black)] mb-4">
            Blog Post Not Found
          </h1>
          <Link href="/blog" className="text-[var(--orange)] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDateTop = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Parse content and split into sections for better layout
  const parseContentSections = (content: string) => {
    const lines = content.split("\n");
    const sections = {
      beforeImage: [] as React.ReactElement[],
      afterImage: [] as React.ReactElement[],
    };

    let currentSection: "beforeImage" | "afterImage" = "beforeImage";
    let paragraphCount = 0;
    let currentParagraph: string[] = [];
    let elementIndex = 0;

    const addParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");

        // Parse formatted text - bold, orange underline
        const parseFormattedText = (str: string): React.ReactNode[] => {
          const result: React.ReactNode[] = [];
          let lastIndex = 0;

          // Combined regex for both bold (**text**) and orange underline (~~text~~)
          const regex = /\*\*(.*?)\*\*|~~(.*?)~~/g;
          let match;

          while ((match = regex.exec(str)) !== null) {
            // Add text before the match
            if (match.index > lastIndex) {
              result.push(str.slice(lastIndex, match.index));
            }

            // Add formatted text
            if (match[1] !== undefined) {
              // Bold text
              result.push(
                <strong key={`bold-${match.index}`}>{match[1]}</strong>
              );
            } else if (match[2] !== undefined) {
              // Orange underline text
              result.push(
                <span
                  key={`orange-${match.index}`}
                  className="text-[var(--orange)] underline decoration-2 underline-offset-2 font-semibold"
                >
                  {match[2]}
                </span>
              );
            }

            lastIndex = regex.lastIndex;
          }

          // Add remaining text
          if (lastIndex < str.length) {
            result.push(str.slice(lastIndex));
          }

          return result.length > 0 ? result : [str];
        };

        const content = parseFormattedText(text);

        const element = (
          <p
            key={`p-${elementIndex++}`}
            className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed mb-6"
          >
            {content}
          </p>
        );

        if (currentSection === "beforeImage" && paragraphCount >= 2) {
          currentSection = "afterImage";
        }

        sections[currentSection].push(element);
        paragraphCount++;
        currentParagraph = [];
      }
    };

    lines.forEach((line) => {
      // Handle headings
      if (line.startsWith("### ")) {
        addParagraph();
        const element = (
          <h3
            key={`h3-${elementIndex++}`}
            className="text-xl font-bold text-[var(--black)] mb-4 mt-8"
          >
            {line.substring(4)}
          </h3>
        );
        sections[currentSection].push(element);
      } else if (line.startsWith("## ")) {
        addParagraph();
        const element = (
          <h2
            key={`h2-${elementIndex++}`}
            className="text-2xl font-bold text-[var(--black)] mb-4 mt-8"
          >
            {line.substring(3)}
          </h2>
        );
        sections[currentSection].push(element);
      } else if (line.startsWith("# ")) {
        addParagraph();
        const element = (
          <h1
            key={`h1-${elementIndex++}`}
            className="text-3xl font-bold text-[var(--black)] mb-6 mt-8"
          >
            {line.substring(2)}
          </h1>
        );
        sections[currentSection].push(element);
      } else if (line.startsWith("> ")) {
        addParagraph();
        const element = (
          <blockquote
            key={`quote-${elementIndex++}`}
            className="border-l-4 border-[var(--orange)] pl-6 py-4 my-8 bg-orange-50 rounded-r-lg"
          >
            <p className="text-lg italic text-[var(--black)] font-medium">
              "{line.substring(2)}"
            </p>
          </blockquote>
        );
        sections[currentSection].push(element);
      } else if (line.trim() === "") {
        addParagraph();
      } else {
        currentParagraph.push(line);
      }
    });

    // Add any remaining paragraph
    addParagraph();

    return sections;
  };

  return (
    <>
      {/* Blog Post Content */}
      <section className="pt-20 bg-[var(--white)] relative">
        {/* Floating Social Share Icons - Desktop Only */}
        <div
          className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6"
          style={{ maxHeight: "60vh" }}
        >
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center hover:bg-[var(--orange)] group transition-all duration-300"
          >
            <Image
              src="/blog/face-book.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="group-hover:brightness-0 group-hover:invert"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center hover:bg-[var(--orange)] group transition-all duration-300"
          >
            <Image
              src="/blog/x.svg"
              alt="Twitter"
              width={24}
              height={24}
              className="group-hover:brightness-0 group-hover:invert"
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center hover:bg-[var(--orange)] group transition-all duration-300"
          >
            <Image
              src="/blog/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="group-hover:brightness-0 group-hover:invert"
            />
          </a>
          <a
            href="https://wa.me/918320659236"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center hover:bg-[var(--orange)] group transition-all duration-300"
          >
            <Image
              src="/blog/Frame.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="group-hover:brightness-0 group-hover:invert"
            />
          </a>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto p-5">
          {/* Blog Header */}
          <div className="flex flex-col gap-3 mb-8 text-center">
            <span className="md:text-left text-sm font-medium text-[var(--black)]">
              • {blog.category}
            </span>

            <div className="md:text-left flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-5">
                {/* Avatar + Author + Date (inline on mobile) */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-[var(--black)]">
                      VS
                    </span>
                  </div>
                  <p className="font-medium text-[var(--black)]">
                    {blog.author || "Vexlure Staff"}
                  </p>

                  {/* Date on mobile sathe me */}
                  <span className="text-[var(--gray-text)] hidden md:inline">
                    •
                  </span>
                  <span className="text-[var(--gray-text)]">
                    {formatDateTop(blog.createdAt)}
                  </span>
                </div>

                {/* Read Time (mobile pe niche)
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-[var(--gray-text)] hidden md:inline">•</span>
                  <span className="text-[var(--gray-text)]">{blog.readTime || '5 min read'}</span>
                </div> */}

                {/* Mobile/Tablet Social Share - Below header info */}

                <div className="xl:hidden flex gap-3 w-[196px] mx-auto md:mx-0">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--secondary-bg)]  flex items-center justify-center text-[var(--gray-text)] hover:text-white hover:bg-[var(--orange)] hover:border-[var(--orange)] group transition-all"
                  >
                    <Image
                      src="/blog/face-book.svg"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="group-hover:brightness-0 group-hover:invert"
                    />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--secondary-bg)] flex items-center justify-center text-[var(--gray-text)] hover:text-white hover:bg-[var(--orange)] hover:border-[var(--orange)] group transition-all"
                  >
                    <Image
                      src="/blog/x.svg"
                      alt="Twitter"
                      width={20}
                      height={20}
                      className="group-hover:brightness-0 group-hover:invert"
                    />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--secondary-bg)] flex items-center justify-center text-[var(--gray-text)] hover:text-white hover:bg-[var(--orange)] hover:border-[var(--orange)] group transition-all"
                  >
                    <Image
                      src="/blog/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="group-hover:brightness-0 group-hover:invert"
                    />
                  </a>
                  <a
                    href="https://wa.me/918320659236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--secondary-bg)] flex items-center justify-center text-[var(--gray-text)] hover:text-white hover:bg-[var(--orange)] hover:border-[var(--orange)] group transition-all"
                  >
                    <Image
                      src="/blog/Frame.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="group-hover:brightness-0 group-hover:invert"
                    />
                  </a>
                </div>
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
                e.currentTarget.src = "/image/industry-agriculture.png";
              }}
            />
          </div>

          {/* Blog Content with Figma Layout */}
          <article className="prose prose-lg max-w-none">
            {/* Description */}
            <div className="text-lg md:text-xl text-[var(--gray-text)] leading-relaxed mb-8 font-light">
              {blog.description}
            </div>

            {/* Content before second image (first 2-3 paragraphs) */}
            <div>
              {(() => {
                const sections = parseContentSections(blog.content);
                return sections.beforeImage;
              })()}
            </div>

            {/* Sub Image if available - placed between content */}
            {blog.subImage && (
              <div className="my-10">
                <Image
                  src={blog.subImage}
                  alt="Additional content image"
                  width={800}
                  height={400}
                  className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "/image/industry-agriculture.png";
                  }}
                />
              </div>
            )}

            {/* Content after second image */}
            <div>
              {(() => {
                const sections = parseContentSections(blog.content);
                return sections.afterImage;
              })()}
            </div>
          </article>

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-[var(--black)] mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[var(--secondary-bg)] text-[var(--black)] rounded-full text-sm hover:bg-[var(--orange)]/10 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
        </div>
      </section>
      <section className="w-full py-8 md:py-25 px-5 md:px-8 bg-[var(--white)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-18">
            <span className="text-sm leading-[22px] md:text-base md:leading-6 font-medium text-[var(--black)] mb-3 block">
              • The Blog
            </span>
            <h2 className="text-2xl leading-9 md:text-[40px] md:leading-13 font-bold text-[var(--black)]">
              You may also like these
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
                    height={270}
                    className="w-full h-[200px] md:h-[270px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/image/industry-agriculture.png";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-[#99999980] text-[var(--white)] px-3 py-2 rounded-full text-xs leading-5 font-medium border border-[var(--border)]">
                    {formatDate(blog.createdAt)}
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] px-1">
                  <div className="flex gap-3">

                  <span className="text-base leading-6 text-[var(--gray-text)] font-medium">
                    {relatedBlog.category}
                  </span>
                  <span className="text-base leading-6 text-[var(--gray-text)]">
                    {" "}
                    • {relatedBlog.readTime || '5 min read'}
                  </span>
                  </div>
                  <h3 className="text-2xl leading-9 font-semibold text-[var(--black)] group-hover:text-[var(--orange)] transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
