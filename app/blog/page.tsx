
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full pt-20 pb-16 px-4 md:px-8 flex flex-col items-center bg-[var(--white)]">
        <div className="w-full max-w-[1440px] flex flex-col items-center text-center">
          <span className="text-sm md:text-base font-medium text-[var(--black)] mb-4 block">
            • Our Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--black)] leading-tight max-w-4xl mb-6">
            Fresh From the Fields
          </h1>
          <p className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed max-w-2xl">
            Explore stories, insights, and updates straight from the heart of agriculture bringing you the latest trends, trade strategies, and the authentic journey of Indian produce to global markets.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="w-full py-8 md:py-16 px-4 md:px-8 bg-[var(--white)]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Featured Article Image */}
            <div className="relative flex justify-between rounded-3xl w-full lg:w-[972px] h-[300px] md:h-[400px] lg:h-[432px]" >
              <Image
                src="/image/industry-agriculture.png"
                alt="Customer Feedback That Reflects Our Commitment to Excellence"
                width={972}
                height={432}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-3xl" ></div>
              
              {/* Content positioned at top-left */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full p-4 md:p-6 lg:p-8">
                {/* Top content */}
                <div className="max-w-full lg:max-w-[448px]">
                  <div className="flex items-center gap-3 text-white text-sm md:text-base leading-6 mb-3 md:mb-4 font-medium">
                    <span>Vegetables</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-[32px] leading-tight md:leading-[44px] font-semibold text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                    Customer Feedback That Reflects Our Commitment to Excellence
                  </h3>
                </div>
                
                {/* Bottom content */}
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="text-white text-xs md:text-sm font-medium">
                    Published
                  </div>
                  <div className="text-white text-xs">
                    Sept 11
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="w-full lg:flex-1 space-y-4 md:space-y-6 bg-[var(--secondary-bg)] p-6 md:p-8 rounded-2xl lg:max-w-[400px]">
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--black)]">
                Spam Free Newsletter
              </h3>
              <p className="text-sm md:text-base text-[var(--gray-text)] leading-relaxed">
                Get the latest insights and strategies to stay ahead in global trade.
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

      {/* Recent Articles Section */}
      {/* <section className="w-full py-16 px-4 md:px-8 bg-[var(--white)]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--black)] mb-4">
              Recent Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            {/* Article 1 */}
            {/* <article className="bg-[var(--secondary-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/agriculture/Beans.jpg"
                  alt="Sustainable farming practices"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-[var(--gray-text)]">
                  <span>Sustainability</span>
                  <span>•</span>
                  <span>Dec 8, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--black)] leading-tight">
                  Sustainable Farming Practices in Modern Agriculture
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  Exploring eco-friendly farming methods that benefit both farmers and the environment.
                </p>
                <button className="text-[var(--orange)] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article> */}

            {/* Article 2 */}
            {/* <article className="bg-[var(--secondary-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/agriculture/Carrot.jpg"
                  alt="Global trade insights"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-[var(--gray-text)]">
                  <span>Trade</span>
                  <span>•</span>
                  <span>Dec 5, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--black)] leading-tight">
                  Global Trade Trends in Agricultural Products
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  Understanding the evolving landscape of international agricultural trade.
                </p>
                <button className="text-[var(--orange)] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article> */}

            {/* Article 3 */}
            {/* <article className="bg-[var(--secondary-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/agriculture/Brinjal.jpg"
                  alt="Quality standards"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-[var(--gray-text)]">
                  <span>Quality</span>
                  <span>•</span>
                  <span>Dec 3, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--black)] leading-tight">
                  Maintaining Quality Standards in Export Agriculture
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  How rigorous quality control ensures premium agricultural exports.
                </p>
                <button className="text-[var(--orange)] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article> */}

            {/* Article 4 */}
            {/* <article className="bg-[var(--secondary-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/agriculture/spices.png"
                  alt="Innovation in agriculture"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-[var(--gray-text)]">
                  <span>Innovation</span>
                  <span>•</span>
                  <span>Nov 30, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--black)] leading-tight">
                  Technology Transforming Traditional Farming
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  How modern technology is revolutionizing age-old farming practices.
                </p>
                <button className="text-[var(--orange)] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>

            {/* Article 5 */}
            {/* <article className="bg-[var(--secondary-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/agriculture/Beans.jpg"
                  alt="Market analysis"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-[var(--gray-text)]">
                  <span>Market</span>
                  <span>•</span>
                  <span>Nov 28, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--black)] leading-tight">
                  Market Analysis: Indian Agriculture in 2024
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  A comprehensive look at market trends and opportunities in Indian agriculture.
                </p>
                <button className="text-[var(--orange)] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article> */}

            {/* Article 6 */}
            {/* <article className="bg-[var(--secondary-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/agriculture/Carrot.jpg"
                  alt="Supply chain optimization"
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-[var(--gray-text)]">
                  <span>Logistics</span>
                  <span>•</span>
                  <span>Nov 25, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--black)] leading-tight">
                  Optimizing Supply Chain for Agricultural Exports
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  Strategies for efficient and reliable agricultural product distribution.
                </p>
                <button className="text-[var(--orange)] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          </div> */}

          {/* Load More Button */}
          {/* <div className="text-center mt-12">
            <button className="bg-[var(--orange)] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      {/* <section className="w-full py-16 px-4 md:px-8 bg-[var(--secondary-bg)]">
        <div className="w-full max-w-[1440px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--black)] mb-4">
            Stay Updated
          </h2>
          <p className="text-base md:text-lg text-[var(--gray-text)] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights from the world of agriculture delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
            />
            <button className="bg-[var(--orange)] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}
      
    </>
  );
}
