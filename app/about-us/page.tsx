import Image from "next/image";
import CertificateLogos from "@/components/CertificateLogos";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full pt-20 px-4 md:px-8 flex flex-col items-center bg-[var(--white)]">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-8">
          {/* Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            {/* Left Content */}
            <div>
              <span className="text-sm md:text-base font-medium text-[var(--black)] mb-2 md:mb-3 block">
                • About Vexlure
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold text-[var(--black)] leading-tight">
                Delivering Premium Agricultural Products Worldwide
              </h1>
            </div>

            {/* Right Content */}
            <div className="md:pt-17 md:pl-14 ">
              <p className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed max-w-2xl">
                We connect farmers to global markets with trust and efficiency.
                Delivering premium agricultural products worldwide.
              </p>
            </div>
          </div>

          {/* Image Below */}
          <div className="w-full py-16">
            <Image
              src="/about-us/about-hero.png"
              alt="Agricultural products and farming"
              width={800}
              height={500}
              className="rounded-2xl w-full max-h-[580px] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-[var(--secondary-bg)]">
        <div className="w-full max-w-[1440px] mx-auto text-center">
          <h2 className="text-2xl md:text-[28px] font-semibold text-[var(--black)] mb-8 max-w-5xl mx-auto leading-10">
            Vexlure International is more than an exporter — we are the bridge
            between India's farms and the world's markets.
          </h2>

          <div className="my-25">
            <p className="text-base md:text-lg text-[var(--gray-text)] mb-16 max-w-2xl mx-auto">
              WE FOLLOW THE HIGHEST GLOBAL STANDARDS AND CERTIFICATIONS.
            </p>

            {/* Certificates */}
            <div className="relative w-full overflow-hidden ">
              <CertificateLogos />
              <div className="absolute left-0 top-0 h-full w-25 md:w-60 bg-gradient-to-r from-[#F3F3F3] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-25 md:w-60 bg-gradient-to-l from-[#F3F3F3] to-transparent pointer-events-none" />{" "}
            </div>
          </div>
          {/* Connecting India's Harvests Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-16">
            {/* Left Content */}
            <div className="text-left">
              <h3 className="text-2xl md:text-[40px] font-semibold text-[var(--black)] mb-6 leading-13">
                Connecting India's Harvests to Global Markets
              </h3>
              <p className="text-base md:text-2xl text-[var(--gray-text)] font-medium leading-9 mb-6">
                Rooted in Gujarat's farmlands and headquartered in Surat, with a base in Munich, we deliver authentic, high-quality agricultural products and spices that reflect India's farming tradition.
              </p>
              <blockquote className=" text-lg leading-7  text-[var(--black)] mb-6">
                "We exist for one purpose: to connect the dedication of Indian farmers with the needs of international businesses."
              </blockquote>
              <p className="text-lg leading-7 text-[var(--black)]">
                - Jash Sanghvi, Founder and CEO
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="/about-us/about-second.png"
                alt="Indian spices and agricultural products"
                width={600}
                height={400}
                className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
              />
              {/* Quality Assured Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-[8px] px-3 py-1 shadow-md flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full">
                  <Image src="/about-us/Frame.svg" alt="Quality Assured" width={20} height={20} />
                </div>
                <span className="text-xs leading-5 font-medium text-[var(--black)]">Quality Assured</span>
              </div>
              {/* Global Sourcing Badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-[8px] px-3 py-1 shadow-md flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full">
                  <Image src="/about-us/Global.svg" alt="Global Sourcing" width={20} height={20} />
                </div>
                <span className="text-xs leading-5 font-medium text-[var(--black)]">Global Sourcing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-20 pb-16 px-4 md:px-8 flex flex-col items-center bg-[var(--white)] min-h-[60vh]">
        <div className="w-full max-w-[1440px] flex flex-col items-center justify-center text-center h-full">
          <span className="text-sm md:text-base font-medium text-[var(--black)] mb-4 block">
            • Our Story
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--black)] leading-tight max-w-4xl">
            Carrying India's Farming Legacy Forward
          </h1>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-[var(--secondary-bg)]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Shows first on mobile */}
            <div className="space-y-6 lg:order-2">
              <span className="text-sm md:text-base font-medium text-[var(--black)] block">
                • Our Vision
              </span>
              <h2 className="text-2xl md:text-[40px] font-semibold text-[var(--black)] leading-tight">
                Representing India's Heritage, Quality, and Taste on the Global Stage
              </h2>
              <p className="text-base md:text-lg text-[var(--gray-text)] leading-relaxed">
                We dream big. Our vision is not limited to exporting commodities it's about representing the real Indian taste to the world. From Surat to Munich, and soon to the USA, Australia, and beyond, we are on a mission to ensure Indian products are recognized for their authenticity, quality, and global standards.
              </p>
              <blockquote className="text-lg md:text-xl font-medium text-[var(--black)] leading-relaxed">
                "To make Indian agriculture and spices a trusted choice in every global market."
              </blockquote>
            </div>

            {/* Left Image - Shows second on mobile */}
            <div className="relative lg:order-1">
              <Image
                src="/about-us/about-second.png"
                alt="Indian spices and herbs"
                width={600}
                height={760}
                className="rounded-2xl w-full h-[400px] md:h-[760px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-[var(--white)]">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className=" mb-12">
            <span className="text-sm md:text-base font-medium text-[var(--black)] mb-4 block">
              • Our Values
            </span>
            <h2 className="text-2xl md:text-[40px] font-semibold text-[var(--black)] leading-tight max-w-2xl">
              Building Trust Through Purpose and Values
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-[120px]">
            {/* Authenticity */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center">
                <Image src="/about-us/Authenticity.svg" alt="Authenticity" width={64} height={64} />
              </div>
              <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">Authenticity</h3>
              <p className="text-lg leading-7 text-[var(--gray-text)]">
                Staying true to our farming roots and India's agricultural heritage.
              </p>
            </div>

            {/* Excellence */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image src="/about-us/Excellence.svg" alt="Excellence" width={64} height={64} />
              </div>
              <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">Excellence</h3>
              <p className="text-lg leading-7 text-[var(--gray-text)]">
                Staying true to our farming roots and India's agricultural heritage.
              </p>
            </div>

            {/* Sustainability */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image src="/about-us/Sustainability.svg" alt="Sustainability" width={64} height={64} />
              </div>
              <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">Sustainability</h3>
              <p className="text-lg leading-7 text-[var(--gray-text)]">
              Supporting farmers, promoting eco-friendly practices, and investing in ethical supply chains.              </p>
            </div>

            {/* Trust */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image src="/about-us/Trust.svg" alt="Trust" width={64} height={64} />
              </div>
              <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">Trust</h3>
              <p className="text-lg leading-7 text-[var(--gray-text)]">
                Building long-term partnerships through transparency and reliability.
              </p>
            </div>

            {/* Innovation */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image src="/about-us/Innovation.svg" alt="Innovation" width={64} height={64} />
              </div>
              <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">Innovation</h3>
              <p className="text-lg leading-7 text-[var(--gray-text)]">
                Transforming traditional products into modern global solutions like superfoods and nutraceuticals.
              </p>
            </div>

            {/* Tailored Business Solutions */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image src="/about-us/Solutions.svg" alt="Tailored Business Solutions" width={64} height={64} />
              </div>
              <h3 className="text-2xl leading-9 font-semibold text-[var(--black)]">Tailored Business Solutions</h3>
              <p className="text-lg leading-7 text-[var(--gray-text)]">
                From packaging styles to shipment sizes, we adapt to your exact needs — ensuring cost efficiency without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
