"use client";
import React, { useState } from "react";
import { HiChevronDown, HiPlus, HiMinus, HiOutlineDocumentText, HiOutlineShieldCheck, HiArrowLeft } from "react-icons/hi2";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const TermsAndConditions = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    about: false,
    email: false,
    phone: false,
    address: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--white)] via-[#FFFBF5] to-[var(--white)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-[#FFF9F2] to-transparent opacity-60"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--orange)] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--orange)] opacity-5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-[1440px] mx-auto mt-10 px-5 md:px-8 py-12 ">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[var(--gray-text)] hover:text-[var(--orange)] font-medium text-sm md:text-base mb-8 transition-all group"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-[900px]">
            {/* <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[var(--orange)]/10 rounded-xl">
                <HiOutlineDocumentText className="w-6 h-6 text-[var(--orange)]" />
              </div>
              <span className="text-[var(--orange)] font-semibold tracking-wide uppercase text-sm">Legal Agreement</span>
            </div> */}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] leading-tight">
              Terms & Conditions
              <span className="text-lg md:text-xl lg:text-2xl font-normal text-[var(--gray-text)] block mt-4">
                for Vexlure International
              </span>
            </h1>
            
            <p className="mt-6 text-[var(--gray-text)] text-base max-w-[700px]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 px-5 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* About Terms Section - Collapsible */}
          <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleSection("about")}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  
                  <h2 className="text-lg md:text-xl font-bold text-[var(--black)]">
                    About Our Terms & Conditions
                  </h2>
                </div>
                <div className={`p-2 rounded-full transition-all ${openSections.about ? 'bg-[var(--orange)] rotate-180' : 'bg-gray-100'}`}>
                  <HiChevronDown className={`w-5 h-5 transition-colors ${openSections.about ? 'text-white' : 'text-[var(--black)]'}`} />
                </div>
              </button>
              
              {openSections.about && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 animate-fadeIn">
                  <div className="pl-14">
                    <p className="text-[var(--gray-text)] leading-relaxed">
                      At Vexlure International, we prioritize transparency in our business operations. 
                      These Terms & Conditions outline the legal framework governing our export services, 
                      ensuring mutual understanding and trust between our company and valued clients worldwide.
                    </p>
                  </div>
                </div>
              )}
            </div>

          {/* Welcome Section */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-12">
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-3xl font-bold text-[var(--black)] mb-2">
                    Welcome To
                  </h2>
                  <h3 className="text-2xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-[var(--orange)] to-orange-400 bg-clip-text text-transparent">
                      Vexlure
                    </span>
                    <span className="text-[var(--black)]"> International</span>
                  </h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="p-4 md:p-6 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border-l-4 border-[var(--orange)]">
                    <p className="text-[var(--gray-text)] leading-relaxed text-sm md:text-base">
                      These Terms and Conditions govern your use of our website. By accessing or browsing our website, 
                      you agree to these Terms. If you do not agree, we kindly request that you discontinue using the website.
                    </p>
                  </div>

                  <p className="text-[var(--gray-text)] leading-relaxed text-base md:text-lg">
                    Vexlure International is legally based in India, with operational locations in Surat, India, 
                    and Munich, Germany. We specialize in the bulk export of quality products worldwide, 
                    supplying in large quantities and containers.
                  </p>
                </div>

                {/* About Us Link */}
                <Link 
                  href="/about-us" 
                  className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-[var(--black)] text-white rounded-full hover:bg-[var(--orange)] transition-all group"
                >
                  <span className="font-medium">LEARN MORE ABOUT US</span>
                  <div className="p-1.5 bg-white/20 rounded-full group-hover:translate-x-1 transition-transform">
                    <HiChevronDown className="w-4 h-4 -rotate-90" />
                  </div>
                </Link>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[var(--black)] mb-4 md:mb-6">Get in Touch</h3>
                <p className="text-[var(--gray-text)] mb-6 md:mb-8 text-base md:text-lg">
                  Have <span className="text-[var(--orange)] font-semibold">questions or concerns</span> about our terms? 
                  We're here to help.
                </p>

                {/* Email Section */}
                <div className="bg-white rounded-xl mb-4 border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                  <button
                    onClick={() => toggleSection("email")}
                    className="w-full flex items-center justify-between p-3 md:p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <IoMailOutline className="w-5 h-5 text-[var(--orange)] flex-shrink-0" />
                      <span className="font-bold text-[var(--black)] text-sm md:text-base">Email</span>
                    </div>
                    <div className={`p-1.5 md:p-2 rounded-full transition-all flex-shrink-0 ${openSections.email ? 'bg-[var(--orange)]' : 'bg-gray-100'}`}>
                      {openSections.email ? (
                        <HiMinus className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      ) : (
                        <HiPlus className="w-3 h-3 md:w-4 md:h-4 text-[var(--black)]" />
                      )}
                    </div>
                  </button>
                  {openSections.email && (
                    <div className="px-3 md:px-5 pb-3 md:pb-5 animate-fadeIn">
                      <div className="md:pl-8 space-y-2">
                        <a 
                          href="mailto:info@vexlureinternational.com" 
                          className="block text-[var(--orange)] hover:underline transition-colors text-sm md:text-base break-all"
                        >
                          info@vexlureinternational.com
                        </a>
                        <a 
                          href="mailto:sales@vexlureinternational.com" 
                          className="block text-[var(--orange)] hover:underline transition-colors text-sm md:text-base break-all"
                        >
                          sales@vexlureinternational.com
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Section */}
                <div className="bg-white rounded-xl mb-4 border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                  <button
                    onClick={() => toggleSection("phone")}
                    className="w-full flex items-center justify-between p-3 md:p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <IoCallOutline className="w-5 h-5 text-[var(--orange)] flex-shrink-0" />
                      <span className="font-bold text-[var(--black)] text-sm md:text-base">Phone</span>
                    </div>
                    <div className={`p-1.5 md:p-2 rounded-full transition-all flex-shrink-0 ${openSections.phone ? 'bg-[var(--orange)]' : 'bg-gray-100'}`}>
                      {openSections.phone ? (
                        <HiMinus className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      ) : (
                        <HiPlus className="w-3 h-3 md:w-4 md:h-4 text-[var(--black)]" />
                      )}
                    </div>
                  </button>
                  {openSections.phone && (
                    <div className="px-3 md:px-5 pb-3 md:pb-5 animate-fadeIn">
                      <div className="md:pl-8 space-y-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">India</p>
                          <a href="tel:+918320659236" className="text-[var(--orange)] hover:underline font-medium text-sm md:text-base">
                            +91 83206-59236
                          </a>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Germany</p>
                          <a href="tel:+4915566345594" className="text-[var(--orange)] hover:underline font-medium text-sm md:text-base">
                            +49 15566-345594
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Address Section */}
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                  <button
                    onClick={() => toggleSection("address")}
                    className="w-full flex items-center justify-between p-3 md:p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <IoLocationOutline className="w-5 h-5 text-[var(--orange)] flex-shrink-0" />
                      <span className="font-bold text-[var(--black)] text-sm md:text-base">Office Locations</span>
                    </div>
                    <div className={`p-1.5 md:p-2 rounded-full transition-all flex-shrink-0 ${openSections.address ? 'bg-[var(--orange)]' : 'bg-gray-100'}`}>
                      {openSections.address ? (
                        <HiMinus className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      ) : (
                        <HiPlus className="w-3 h-3 md:w-4 md:h-4 text-[var(--black)]" />
                      )}
                    </div>
                  </button>
                  {openSections.address && (
                    <div className="px-3 md:px-5 pb-3 md:pb-5 animate-fadeIn">
                      <div className="md:pl-8 space-y-3 md:space-y-4">
                        <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 md:mb-2">India Office</p>
                          <p className="text-[var(--black)] font-medium text-sm md:text-base">
                            Patel Chambers 108<br />
                            395006 Surat, Gujarat
                          </p>
                        </div>
                        <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 md:mb-2">Germany Office</p>
                          <p className="text-[var(--black)] font-medium text-sm md:text-base">
                            Heighlhofstraße 66<br />
                            81377 Munich, Bavaria
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          {/* Services Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--black)] to-gray-900 rounded-3xl p-10 md:p-14 mb-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--orange)] opacity-10 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-8">Our Services & Trade Terms</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--orange)] mt-2"></div>
                      <p className="text-gray-300 leading-relaxed">Product sourcing & quality inspection</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--orange)] mt-2"></div>
                      <p className="text-gray-300 leading-relaxed">Professional packaging & logistics</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--orange)] mt-2"></div>
                      <p className="text-gray-300 leading-relaxed">Complete documentation support</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--orange)] mt-2"></div>
                      <p className="text-gray-300 leading-relaxed">Letter of Credit (LC) payment terms</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--orange)] mt-2"></div>
                      <p className="text-gray-300 leading-relaxed">Secure banking transactions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--orange)] mt-2"></div>
                      <p className="text-gray-300 leading-relaxed">Transparent pricing structure</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-8 p-4 bg-white/5 rounded-lg">
                  <span className="text-[var(--orange)] font-semibold">Note:</span> Prices quoted are exclusive of applicable taxes, duties, and shipping costs unless specified otherwise.
                </p>
              </div>
            </div>

          {/* Legal Terms Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <HiOutlineDocumentText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--black)]">Shipping & Delivery</h4>
                </div>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  Shipping times may vary due to customs clearance and unforeseen delays. Customers are responsible 
                  for import duties, taxes, and regulatory fees. Quality issues must be reported within 7 days of delivery.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <HiOutlineShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--black)]">Quality Guarantee</h4>
                </div>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  All products comply with agreed quality standards and specifications. Any discrepancies must be 
                  reported within 7 days. We ensure product authenticity and maintain strict quality control.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <HiOutlineDocumentText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--black)]">Intellectual Property</h4>
                </div>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  All website content including logos, text, and graphics are property of Vexlure International. 
                  Unauthorized use, reproduction, or distribution is strictly prohibited.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <HiOutlineShieldCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--black)]">Liability & Disputes</h4>
                </div>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  Governed by Indian law with disputes subject to Indian jurisdiction. We're not liable for indirect 
                  damages or delays beyond our control. Terms may be updated at any time.
                </p>
              </div>
            </div>

          {/* CTA Button */}
            <div className="text-center mb-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-[var(--orange)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--orange)]/90 transition-all shadow-lg group"
              >
                <span>GET INDIVIDUAL SOLUTION</span>
                <HiChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          {/* Footer Note */}
            {/* <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-100 rounded-lg flex-shrink-0">
                  <HiOutlineDocumentText className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--black)] mb-2">Important Notice</h4>
                  <p className="text-sm text-[var(--gray-text)] leading-relaxed">
                    These Terms and Conditions were last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}. 
                    We reserve the right to modify these terms at any time. Please review this page periodically for changes. 
                    Your continued use of our services after any modifications indicates your acceptance of the updated terms.
                  </p>
                </div>
              </div>
            </div> */}
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
