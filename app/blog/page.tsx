"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

// Article Card Component
const ArticleCard = ({
  blog,
}: {
  blog: BlogPost;
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/blog/${blog.slug}`} className="block group">
      <article className="bg-transparent">
        <div className="relative mb-4">
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={300}
            className="w-full h-[272px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = '/image/industry-agriculture.png';
            }}
          />
          <div className="absolute top-4 right-4 bg-[#99999980] text-[var(--white)] px-3 py-2 rounded-full text-xs leading-5 font-medium border">
            {formatDate(blog.createdAt)}
          </div>
        </div>
        <div className="space-y-3 px-1">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base leading-[22px] md:leading-6 text-[var(--gray-text)]">{blog.category}</span>
            <span className="text-sm md:text-base leading-[22px] md:leading-6 text-[var(--gray-text)]">•</span>
            <span className="text-sm md:text-base leading-[22px] md:leading-6 text-[var(--gray-text)]">5 min read</span>
          </div>
          <h3 className="text-xl md:text-2xl leading-[20px] md:leading-9 font-semibold text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
            {blog.title}
          </h3>
        </div>
      </article>
    </Link>
  );
};

const BLOG_CATEGORIES = [
  'All Categories',
  'Export Insights',
  'Market Analysis',
  'Spice Knowledge', 
  'Health Benefits',
  'Certifications Quality'
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [featuredBlog, setFeaturedBlog] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?published=true');
        const result = await response.json();
        if (result.success) {
          setBlogs(result.data);
          setFilteredBlogs(result.data);
          // Set first blog as featured
          if (result.data.length > 0) {
            setFeaturedBlog(result.data[0]);
          }
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs by category
  useEffect(() => {
    if (selectedCategory === 'All Categories') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full pt-20 pb-16 px-5 md:px-8 flex flex-col items-center bg-[var(--white)]">
        <div className="w-full max-w-[1440px] flex flex-col items-center text-center">
          <span className="text-sm md:text-base font-medium text-[var(--black)] mb-4 block">
            • Our Blog
          </span>
          <h1 className="text-[32px] md:text-5xl font-semibold text-[var(--black)] leading-[44px] max-w-4xl mb-4 md:mb-6">
            Fresh From the Fields
          </h1>
          <p className="text-base md:text-xl text-[var(--gray-text)] leading-[24px] md:leading-8 max-w-3xl">
            Explore stories, insights, and updates straight from the heart of
            agriculture bringing you the latest trends, trade strategies, and
            the authentic journey of Indian produce to global markets.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="w-full py-8 md:py-16 px-5 md:px-8 bg-[var(--white)]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
            {/* Featured Article Image */}
            <div className="relative flex justify-between rounded-3xl w-full md:w-[65%] xl:w-[972px] h-[400px] xl:h-[432px] order-2 md:order-1">
              {featuredBlog ? (
                <>
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    width={972}
                    height={432}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      e.currentTarget.src = '/image/industry-agriculture.png';
                    }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

                  {/* Content positioned at top-left */}
                  <div className="relative z-10 flex flex-col justify-between h-full w-full p-4 md:p-6 lg:p-8">
                    {/* Top content */}
                    <div className="max-w-full lg:max-w-[448px]">
                      <div className="flex items-center gap-3 text-white text-sm md:text-base leading-6 mb-3 md:mb-4 font-medium">
                        <span>{featuredBlog.category}</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>
                      <Link href={`/blog/${featuredBlog.slug}`}>
                        <h3
                          className="text-lg md:text-xl lg:text-[32px] leading-tight md:leading-[44px] font-semibold text-white hover:text-orange-200 transition-colors cursor-pointer"
                          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                        >
                          {featuredBlog.title}
                        </h3>
                      </Link>
                    </div>

                    {/* Bottom content */}
                    <div className="flex flex-col gap-1 md:gap-2">
                      <div className="text-white text-xs md:text-sm font-medium">
                        Published
                      </div>
                      <div className="text-white text-xs">
                        {new Date(featuredBlog.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-gray-200 rounded-3xl flex items-center justify-center">
                  <div className="text-gray-500">No featured blog available</div>
                </div>
              )}
            </div>

            {/* Newsletter Section */}
            <div className="w-full md:w-[35%] xl:w-[400px] space-y-4 md:space-y-6 bg-[var(--secondary-bg)] p-6 md:p-8 rounded-2xl order-1 md:order-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--black)]">
                Spam Free Newsletter
              </h3>
              <p className="text-sm md:text-base text-[var(--gray-text)] leading-relaxed">
                Get the latest insights and strategies to stay ahead in global
                trade.
              </p>
              <div className="space-y-3 md:space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--orange)] text-sm md:text-base"
                />
                <button className="w-full bg-[var(--orange)] text-white py-2 md:py-3 rounded-3xl font-medium hover:bg-opacity-90 transition-colors text-sm md:text-base">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid Section */}
      <section className="w-full py-16 px-5 md:px-8 bg-[var(--white)]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-18">
            {/* Categories Sidebar */}
            <div className="w-full lg:w-[454px] md:h-[380px] bg-[var(--secondary-bg)] rounded-2xl border border-[var(--border)] px-5 md:px-8 py-[22px] md:py-7">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">
                  Categories
                </h3>
                <Image
                  src="/Dropdown-Icon.svg"
                  alt="Dropdown Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {BLOG_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-5 py-[10px] rounded-full text-sm md:text-base md:leading-6 font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="flex-1">
              {loading ? (
                <div className="text-center py-12">
                  <div className="text-xl text-gray-600">Loading blogs...</div>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-xl text-gray-600 mb-4">
                    {selectedCategory === 'All Categories' 
                      ? 'No blogs published yet.' 
                      : `No blogs found in "${selectedCategory}" category.`
                    }
                  </div>
                  <p className="text-gray-500">
                    {selectedCategory === 'All Categories' 
                      ? 'Check back soon for new content!' 
                      : 'Try selecting a different category.'
                    }
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredBlogs.slice(selectedCategory === 'All Categories' ? 1 : 0).map((blog) => (
                    <ArticleCard
                      key={blog._id}
                      blog={blog}
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center items-center mt-12 gap-3">
                <button className="px-1 py-[10px] text-[var(--gray-text)] text-sm leading-[22px] font-medium hover:text-[var(--black)] transition-colors">
                  Prev
                </button>
                <button className="w-10 h-10 rounded-lg bg-[var(--orange)] text-white flex items-center justify-center text-sm font-medium">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg border border-gray-300 bg-white text-[var(--gray-text)] flex items-center justify-center text-sm font-medium hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg border border-gray-300 bg-white text-[var(--gray-text)] flex items-center justify-center text-sm font-medium hover:bg-gray-50 transition-colors">
                  3
                </button>
                <span className="text-[var(--gray-text)] mx-1">...</span>
                <button className="w-10 h-10 rounded-lg border border-gray-300 bg-white text-[var(--gray-text)] flex items-center justify-center text-sm font-medium hover:bg-gray-50 transition-colors">
                  10
                </button>
                <button className="px-1 py-[10px] text-[var(--gray-text)] text-sm font-medium hover:text-[var(--black)] transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
