import Image from "next/image";
import Link from "next/link";

// Article Card Component
const ArticleCard = ({
  id,
  date,
  category,
  readTime,
  title,
  imageSrc,
}: {
  id: number;
  date: string;
  category: string;
  readTime: string;
  title: string;
  imageSrc: string;
}) => (
  <Link href={`/blog/customer-feedback-reflects-commitment-excellence`} className="block group">
    <article className="bg-transparent">
      <div className="relative mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={300}
          className="w-full h-[272px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#99999980] text-[var(--white)] px-3 py-2 rounded-full text-xs leading-5 font-medium border">
          {date}
        </div>
      </div>
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base leading-[22px] md:leading-6 text-[var(--gray-text)]">{category}</span>
          <span className="text-sm md:text-base leading-[22px] md:leading-6 text-[var(--gray-text)]">•</span>
          <span className="text-sm md:text-base leading-[22px] md:leading-6 text-[var(--gray-text)]">{readTime}</span>
        </div>
        <h3 className="text-xl md:text-2xl leading-[20px] md:leading-9 font-semibold text-[var(--black)] group-hover:text-[var(--orange)] transition-colors">
          {title}
        </h3>
      </div>
    </article>
  </Link>
);

export default function BlogPage() {
  // Articles data
  const articles = [
    {
      id: 1,
      date: "12-09-2025",
      category: "Soil Health",
      readTime: "4 min read",
      title: "Customer Feedback That Reflects Our Commitment to Excellence",
      imageSrc: "/agriculture/spices.png",
    },
    {
      id: 2,
      date: "11-09-2025",
      category: "Crop Management",
      readTime: "5 min read",
      title: "Sustainable Farming Practices for Modern Agriculture",
      imageSrc: "/agriculture/Beans.jpg",
    },
    {
      id: 3,
      date: "10-09-2025",
      category: "Water Supply",
      readTime: "3 min read",
      title: "Innovative Irrigation Techniques for Better Yields",
      imageSrc: "/agriculture/Carrot.jpg",
    },
    {
      id: 4,
      date: "09-09-2025",
      category: "Organic Farming",
      readTime: "6 min read",
      title: "Organic Certification Process and Benefits",
      imageSrc: "/agriculture/Brinjal.jpg",
    },
    {
      id: 5,
      date: "08-09-2025",
      category: "Soil Health",
      readTime: "4 min read",
      title: "Understanding Soil pH and Nutrient Management",
      imageSrc: "/agriculture/spices.png",
    },
    {
      id: 6,
      date: "07-09-2025",
      category: "Agricultural Science",
      readTime: "7 min read",
      title: "Climate Change Impact on Agricultural Productivity",
      imageSrc: "/agriculture/Beans.jpg",
    },
    {
      id: 7,
      date: "06-09-2025",
      category: "Sustainable Practices",
      readTime: "5 min read",
      title: "Reducing Carbon Footprint in Agriculture",
      imageSrc: "/agriculture/Carrot.jpg",
    },
    {
      id: 8,
      date: "05-09-2025",
      category: "Greenhouse",
      readTime: "4 min read",
      title: "Advanced Greenhouse Technologies for Year-Round Production",
      imageSrc: "/agriculture/Brinjal.jpg",
    },
  ];

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
              <Image
                src="/image/industry-agriculture.png"
                alt="Customer Feedback That Reflects Our Commitment to Excellence"
                width={972}
                height={432}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

              {/* Content positioned at top-left */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full p-4 md:p-6 lg:p-8">
                {/* Top content */}
                <div className="max-w-full lg:max-w-[448px]">
                  <div className="flex items-center gap-3 text-white text-sm md:text-base leading-6 mb-3 md:mb-4 font-medium">
                    <span>Vegetables</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>
                  <h3
                    className="text-lg md:text-xl lg:text-[32px] leading-tight md:leading-[44px] font-semibold text-white"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                  >
                    Customer Feedback That Reflects Our Commitment to Excellence
                  </h3>
                </div>

                {/* Bottom content */}
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="text-white text-xs md:text-sm font-medium">
                    Published
                  </div>
                  <div className="text-white text-xs">Sept 11</div>
                </div>
              </div>
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
                <button className="px-5 py-[10px] rounded-full bg-black text-white text-sm md:text-base md:leading-6 font-medium">
                  All Categories
                </button>
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-[10px] rounded-full bg-white  text-gray-800 text-sm md:text-base md:leading-6 font-medium">
                    Agricultural Science
                  </button>
                  <button className="px-5 py-[10px] rounded-full bg-white  text-gray-800 text-sm md:text-base md:leading-6 font-medium">
                    Soil Health
                  </button>
                  <button className="px-5 py-[10px] rounded-full bg-white  text-gray-800 text-sm md:text-base md:leading-6 font-medium">
                    Crop Management
                  </button>
                  <button className="px-5 py-[10px] rounded-full bg-white  text-gray-800 text-sm md:text-base md:leading-6 font-medium">
                    Sustainable Practices
                  </button>
                  <button className="px-5 py-[10px] rounded-full bg-white  text-gray-800 text-sm md:text-base md:leading-6 font-medium">
                    Water Supply
                  </button>
                  <button className="px-5 py-[10px] rounded-full bg-white  text-gray-800 text-sm md:text-base md:leading-6 font-medium">
                    Organic Farming
                  </button>
                  <button className="px-5 py-[10px] rounded-full bg-white  text-gray-800 text-sm md:text-base md:leading-6 font-medium">
                    Animal Care
                  </button>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    id={article.id}
                    date={article.date}
                    category={article.category}
                    readTime={article.readTime}
                    title={article.title}
                    imageSrc={article.imageSrc}
                  />
                ))}
              </div>

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
