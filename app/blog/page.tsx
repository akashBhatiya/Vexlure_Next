"use client";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import AnimatedFlexSection from "@/components/Animation/AnimatedFlexSection";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

// Article Card Component
const ArticleCard = ({
  blog,
}: {
  blog: BlogPost;
}) => {
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
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
          <div className="absolute top-4 right-4 bg-[#99999980] text-[var(--white)] px-3 py-2 rounded-full text-xs leading-5 font-medium border border-[var(--border)]">
            {formatDate(blog.createdAt)}
          </div>
        </div>
        <div className="space-y-3 px-1">
          <div className="flex items-center gap-2">
            <span className="text-blog-card-meta text-[var(--gray-text)]">{blog.category}</span>
            <span className="text-blog-card-meta text-[var(--gray-text)]">•</span>
            <span className="text-blog-card-meta text-[var(--gray-text)]">{blog.readTime || '5 min read'}</span>
          </div>
          <h3 className="text-blog-card-title font-semibold text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
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
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [featuredBlog, setFeaturedBlog] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;
  
  // Newsletter form states
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

  const handleCategoryChange = async (category: string) => {
    setCategoryLoading(true);
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
    
    // Add small delay for smooth transition
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (category === 'All Categories') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => blog.category === category);
      setFilteredBlogs(filtered);
    }
    
    setCategoryLoading(false);
    
    // Close modal on mobile after selection (keep open on desktop)
    if (window.innerWidth < 1024) {
      setIsCategoriesOpen(false);
    }
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of blog section
    const blogSection = document.querySelector('#blog-articles');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setSubscribeStatus({ type: null, message: '' });
    
    // Validate email
    if (!email) {
      setSubscribeStatus({ type: 'error', message: 'Please enter your email address' });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }
    
    setSubscribing(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubscribeStatus({ 
          type: 'success', 
          message: 'Thank you for subscribing to our newsletter!' 
        });
        setEmail(''); // Clear email field
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubscribeStatus({ type: null, message: '' });
        }, 5000);
      } else {
        setSubscribeStatus({ 
          type: 'error', 
          message: result.error || 'Failed to subscribe. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      setSubscribeStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later.' 
      });
    } finally {
      setSubscribing(false);
    }
  };

  // Initialize categories as open on desktop, closed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint - desktop
        setIsCategoriesOpen(true); // Default open on desktop
      } else {
        setIsCategoriesOpen(false); // Default closed on mobile
      }
    };

    // Set initial state
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full pt-20 pb-8 px-5 md:px-16 flex flex-col items-center bg-[var(--white)] overflow-hidden">
        <AnimatedSection className="w-full max-w-[1440px] flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3">

          <span className="text-product-label font-medium text-[var(--black)] block">
            • Our Blog
          </span>
          <div className="flex flex-col items-center gap-4">

          <h1 className="text-blog-hero-title font-semibold text-[var(--black)] max-w-4xl ">
            Fresh From the Fields
          </h1>
          <p className="text-blog-hero-description text-[var(--gray-text)] max-w-3xl">
            Explore stories, insights, and updates straight from the heart of
            agriculture bringing you the latest trends, trade strategies, and
            the authentic journey of Indian produce to global markets.
          </p>
          </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Article Section */}
      <section className="w-full py-8 px-5 md:px-16 bg-[var(--white)] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto">
          <AnimatedFlexSection className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start" delay={0.2}>
            {/* Featured Article Image */}
            <div className="relative flex justify-between rounded-3xl w-full md:w-[65%] xl:w-[65%] max-w-[972px] h-[400px] xl:h-[432px] order-2 md:order-1">
              {loading ? (
                // Skeleton loader for featured blog
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl animate-pulse">
                  <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 lg:p-8">
                    {/* Top skeleton content */}
                    <div className="max-w-full lg:max-w-[448px]">
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <div className="h-5 w-24 bg-gray-400/50 rounded animate-pulse"></div>
                        <div className="h-5 w-2 bg-gray-400/50 rounded animate-pulse"></div>
                        <div className="h-5 w-20 bg-gray-400/50 rounded animate-pulse"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-8 w-full bg-gray-400/50 rounded animate-pulse"></div>
                        <div className="h-8 w-3/4 bg-gray-400/50 rounded animate-pulse"></div>
                      </div>
                    </div>
                    {/* Bottom skeleton content */}
                    <div className="flex flex-col gap-2">
                      <div className="h-4 w-16 bg-gray-400/50 rounded animate-pulse"></div>
                      <div className="h-4 w-24 bg-gray-400/50 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ) : featuredBlog ? (
                <>
                  <Link href={`/blog/${featuredBlog.slug}`} className="absolute inset-0 block group cursor-pointer">
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
                    <div className="absolute inset-0 bg-black/30 rounded-3xl group-hover:bg-black/40 transition-colors duration-300"></div>

                    {/* Content positioned at top-left */}
                    <div className="relative z-10 flex flex-col justify-between h-full w-full p-4 md:p-6 lg:p-8 pointer-events-none">
                      {/* Top content */}
                      <div className="max-w-full lg:max-w-[448px]">
                        <div className="flex items-center gap-3 text-white text-sm md:text-base leading-6 mb-3 md:mb-4 font-medium">
                          <span>{featuredBlog.category}</span>
                          <span>•</span>
                          <span>{featuredBlog.readTime || '5 min read'}</span>
                        </div>
                        <h3
                          className="text-blog-featured-title text-white font-semibold cursor-pointer"
                        >
                          {featuredBlog.title}
                        </h3>
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
                  </Link>
                </>
              ) : (
                <div className="absolute inset-0 bg-gray-200 rounded-3xl flex items-center justify-center">
                  <div className="text-gray-500">No featured blog available</div>
                </div>
              )}
            </div>

            {/* Newsletter Section */}
            <div className="w-full md:w-[35%] xl:w-[35%] max-w-[400px] space-y-4 md:space-y-6 bg-[var(--secondary-bg)] p-6 md:p-8 rounded-2xl order-1 md:order-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--black)]">
                Spam Free Newsletter
              </h3>
              <p className="text-sm md:text-base text-[var(--gray-text)] leading-relaxed">
                Get the latest insights and strategies to stay ahead in global
                trade.
              </p>
              
              {/* Success/Error Message */}
              {subscribeStatus.type && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    subscribeStatus.type === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  {subscribeStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubscribe} className="space-y-3 md:space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribing}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button 
                  type="submit"
                  disabled={subscribing}
                  className="w-full bg-[var(--orange)] text-white py-2 md:py-3 rounded-3xl font-medium hover:bg-opacity-90 transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {subscribing ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe now'
                  )}
                </button>
              </form>
            </div>
          </AnimatedFlexSection>
        </div>
      </section>

      {/* Blog Articles Grid Section */}
      <section className="w-full py-6 px-5 md:px-16 bg-[var(--white)] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto">
          <AnimatedFlexSection className="flex flex-col lg:flex-row gap-6 lg:gap-8" delay={0.3}>
            {/* Categories Sidebar */}
            <div
  className={`w-full lg:w-[350px] xl:w-[400px] 2xl:w-[454px] bg-[var(--secondary-bg)] rounded-2xl border border-[var(--border)] px-5 md:px-8 py-[22px] md:py-7 transition-all duration-300 overflow-hidden flex-shrink-0
    ${isCategoriesOpen ? 'max-h-[330px]' : 'max-h-[90px]'}
  `}
>
              <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">
                  Categories
                </h3>
                <button
                  onClick={toggleCategories}
                  className="p-1 hover:bg-gray-200 rounded transition-colors cursor-pointer"
                >
                  <Image
                    src="/Dropdown-Icon.svg"
                    alt="Dropdown Icon"
                    width={20}
                    height={20}
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isCategoriesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {/* Categories Content - Collapsible on all devices */}
              <div className={`${
                isCategoriesOpen ? 'block' : 'hidden'
              } transition-all duration-300`}>
                {/* All Categories Button - Separate */}
                <div className="mb-3">
                  <button
                    onClick={() => handleCategoryChange('All Categories')}
                    className={`px-5 py-[10px] rounded-full text-blog-category-button font-medium transition-colors ${
                      selectedCategory === 'All Categories'
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    All Categories
                  </button>
                </div>
                
                {/* Other Categories */}
                <div className="flex flex-wrap gap-3">
                  {BLOG_CATEGORIES.filter(category => category !== 'All Categories').map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-5 py-[10px] rounded-full text-blog-category-button font-medium transition-colors ${
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
              </div>
            </div>

            {/* Articles Grid */}
            <div className="flex-1 min-w-0" id="blog-articles">
              {loading || categoryLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Generate 4 skeleton cards */}
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="bg-transparent">
                      <div className="relative mb-4">
                        <div className="w-full h-[272px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl animate-pulse overflow-hidden">
                          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>
                        <div className="absolute top-4 right-4 bg-gray-300/80 px-3 py-2 rounded-full">
                          <div className="h-4 w-20 bg-gray-400/50 rounded animate-pulse" />
                        </div>
                      </div>
                      <div className="space-y-3 px-1">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                          <div className="h-4 w-2 bg-gray-300 rounded animate-pulse" />
                          <div className="h-4 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-6 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                          <div className="h-6 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : currentBlogs.length === 0 ? (
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
                <>
                  <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
                    {currentBlogs.map((blog) => (
                      <ArticleCard
                        key={blog._id}
                        blog={blog}
                      />
                    ))}
                  </AnimatedSection>
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <AnimatedFlexSection className="mt-12 flex justify-center items-center gap-2" delay={0.5}>
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-lg text-[var(--gray-text)] hover:bg-gray-100 transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        <h1>Prev</h1>
                      </button>
                      
                      {/* Page Numbers */}
                      <div className="flex gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                          // Show first page, last page, current page, and adjacent pages
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                                  currentPage === page
                                    ? 'bg-[var(--orange)] text-white'
                                    : 'border border-[var(--border)] text-[var(--black)]'
                                }`}
                              >
                                {page}
                              </button>
                            );
                          } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return (
                              <span key={page} className="px-2 py-2 text-gray-400">
                                ...
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                      
                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 rounded-lg  text-[var(--gray-text)] hover:bg-gray-100 transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        <h1>Next</h1>
                      </button>
                    </AnimatedFlexSection>
                  )}
                </>                
              )}
            </div>
          </AnimatedFlexSection>
        </div>
      </section>
    </main>
  );
}
