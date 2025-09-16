"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock blog data - in real app, this would come from CMS or API
const blogPosts = {
  "customer-feedback-reflects-commitment-excellence": {
    category: "Agricultural Science",
    title: "Customer Feedback That Reflects Our Commitment to Excellence",
    author: "Ishan Sharma",
    authorImage:"/avatars/jonathan.png", 
    date: "Sept 12, 2025",
    readTime: "4 min read",
    heroImage: "/agriculture/spices.png",
    content: [
      {
        type: "text",
        content: "Become a vital part of EcoHarvest, where we seek an enthusiastic individual to strengthen our agricultural export sector. In this position, you will play a crucial role in promoting sustainable practices and maintaining the excellence of our products as we broaden our global footprint."
      },
      {
        type: "text",
        content: "This senior position offers you the chance to collaborate with two seasoned professionals, each boasting over three decades of expertise in agricultural exports. You will have the creative freedom to devise and execute strategies that propel our mission forward while managing key operations that benefit our farmers."
      },
      {
        type: "text",
        content: "We are excited to welcome someone who is dedicated to a long-term journey with us, beginning with a flexible part-time opportunity. This role is fully remote, featuring weekly team meetings every Tuesday for an hour to review progress and exchange ideas."
      },
      {
        type: "image",
        src: "/products/Natural-Health.png",
        alt: "Natural health products"
      },
      {
        type: "heading",
        content: "Essential Qualifications"
      },
      {
        type: "list",
        items: [
          "At least 10 years of experience in agricultural export or related sectors.",
          "At least 10 years of experience in agricultural export or related sectors.",
          "At least 10 years of experience in agricultural export or related sectors.",
          "At least 10 years of experience in agricultural export or related sectors."
        ]
      },
      {
        type: "heading",
        content: "Essential Qualifications"
      },
      {
        type: "text",
        content: "Opportunity: We are in search of a committed individual interested in a long-term role with us, starting with a part-time commitment. This position is entirely remote, with a weekly team meeting every Tuesday for an hour."
      },
      {
        type: "text",
        content: "This senior role allows you to work alongside two industry experts, each with over 30 years of experience in agricultural exports. You will enjoy considerable autonomy, as we seek someone who can advance projects independently while overseeing essential aspects of our export operations."
      },
      {
        type: "text",
        content: "We are excited to welcome someone who is dedicated to a long-term journey with us, beginning with a flexible part-time opportunity. This role is fully remote, featuring weekly team meetings every Tuesday for an hour to review progress and exchange ideas."
      },
      {
        type: "heading",
        content: "Preferred but not required"
      },
      {
        type: "text",
        content: "Opportunity: We are in search of a committed individual interested in a long-term role with us, starting with a part-time commitment. This position is entirely remote, with a weekly team meeting every Tuesday for an hour."
      },
      {
        type: "text",
        content: "This senior role allows you to work alongside two industry experts, each with over 30 years of experience in agricultural exports. You will enjoy considerable autonomy, as we seek someone who can advance projects independently while overseeing essential aspects of our export operations."
      },
      {
        type: "heading",
        content: "Concluding Remarks"
      },
      {
        type: "text",
        content: "This senior role allows you to work alongside two industry experts, each with over 30 years of experience in agricultural exports. You will enjoy considerable autonomy, as we seek someone who can advance projects independently while overseeing essential aspects of our export operations."
      }
    ],
    tags: ["Agricultural Science", "Soil Health", "Crop Management", "Sustainable Practices", "Water Supply", "Organic Farming", "Animal Care"]
  }
};

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
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--black)] mb-4">Blog Post Not Found</h1>
            <Link href="/blog" className="text-[var(--orange)] hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      
      {/* Blog Post Content */}
      <section className="pt-20 bg-[var(--white)]">

        {/* Main Content */}
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-[var(--black)]">• {post.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--black)]">
                    <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                    />
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[var(--black)]">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[var(--gray-text)]">•</span>
                <span className="text-[var(--gray-text)]">{post.date}</span>
                <span className="text-[var(--gray-text)]">•</span>
                <span className="text-[var(--gray-text)]">{post.readTime}</span>
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
              src={post.heroImage}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none">
            {post.content.map((section, index) => {
              switch (section.type) {
                case 'text':
                  return (
                    <p key={index} className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed mb-6">
                      {section.content}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold text-[var(--black)] mt-12 mb-6">
                      {section.content}
                    </h2>
                  );
                case 'list':
                  return (
                    <ul key={index} className="space-y-3 mb-8">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[var(--orange)] rounded-full mt-3 flex-shrink-0"></span>
                          <span className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case 'image':
                  return (
                    <div key={index} className="my-8">
                      <Image
                        src={section.src!}
                        alt={section.alt!}
                        width={800}
                        height={400}
                        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </article>

          {/* Tags Section */}
          <div className="mt-12 mb-12">
            <h3 className="text-lg font-semibold text-[var(--black)] mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[var(--secondary-bg)] text-[var(--black)] rounded-full text-sm hover:bg-[var(--orange)]/10 transition-colors cursor-pointer"
                >
                  {tag}
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
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group block"
                >
                  <div className="relative mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={400}
                      height={250}
                      className="w-full h-[200px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                      {relatedPost.date}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-[var(--orange)] font-medium">{relatedPost.category}</span>
                    <span className="text-sm text-[var(--gray-text)]"> • {relatedPost.readTime}</span>
                    <h3 className="font-bold text-[var(--black)] group-hover:text-[var(--orange)] transition-colors line-clamp-2">
                      {relatedPost.title}
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
