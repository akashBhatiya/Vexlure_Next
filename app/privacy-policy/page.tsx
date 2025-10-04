"use client";
import React, { useState } from "react";
import { HiChevronDown, HiPlus, HiMinus, HiOutlineShieldCheck, HiArrowLeft } from "react-icons/hi2";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const PrivacyPolicy = () => {
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
        
        <div className="relative max-w-[1440px] mx-auto mt-10 px-5 md:px-8 py-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[var(--gray-text)] hover:text-[var(--orange)] font-medium text-sm md:text-base mb-8 transition-all group"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-[900px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--black)] leading-tight">
              Privacy Policy
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
          {/* About Privacy Policy Section - Collapsible */}
          <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleSection("about")}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-lg md:text-xl font-bold text-[var(--black)]">
                    About Vexlure International Privacy
                  </h2>
                </div>
                <div className={`p-2 rounded-full transition-all ${openSections.about ? 'bg-[var(--orange)]' : 'bg-gray-100'}`}>
                  {openSections.about ? (
                    <HiMinus className="w-4 h-4 text-white" />
                  ) : (
                    <HiPlus className="w-4 h-4 text-[var(--black)]" />
                  )}
                </div>
              </button>
              {openSections.about && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 animate-fadeIn">
                  <div className="pl-0">
                    <p className="text-[var(--gray-text)] leading-relaxed">
                      At Vexlure International, we respect your privacy and are committed to protecting your personal information. 
                      This Privacy Policy explains how we collect, use, and safeguard the data you provide when using our website.
                    </p>
                  </div>
                </div>
              )}
            </div>

          {/* Our Approach Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-12">
            <div>
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-3xl font-bold text-[var(--black)] mb-2">
                  Our Approach
                </h2>
                <h3 className="text-2xl md:text-4xl font-bold">
                  <span className="text-[var(--black)]">and</span>{" "}
                  <span className="bg-gradient-to-r from-[var(--orange)] to-orange-400 bg-clip-text text-transparent">
                    Our Expertise
                  </span>
                </h3>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-[var(--gray-text)] leading-relaxed text-base md:text-lg">
                  At Vexlure International, we respect your privacy and are committed to protecting your personal information.
                </p>

                <div className="p-4 md:p-6 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border-l-4 border-[var(--orange)]">
                  <p className="text-[var(--gray-text)] leading-relaxed text-sm md:text-base">
                    This Privacy Policy explains how we collect, use, and safeguard the data you provide when using our website.
                  </p>
                </div>

                {/* About Us Link */}
                <Link 
                  href="/about-us" 
                  className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-[var(--black)] text-white rounded-full hover:bg-[var(--orange)] transition-all group"
                >
                  <span className="font-medium">ABOUT US</span>
                  <div className="p-1.5 bg-white/20 rounded-full group-hover:translate-x-1 transition-transform">
                    <HiChevronDown className="w-4 h-4 -rotate-90" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-8 border border-gray-100">
              <p className="text-[var(--gray-text)] mb-6 md:mb-8 text-base md:text-lg">
                If you have <span className="text-[var(--orange)] font-semibold">questions, concerns, or requests</span> regarding 
                this Privacy Policy, please contact us at:
              </p>

              {/* Email Section */}
              <div className="bg-white rounded-xl mb-4 border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow">
                <button
                  onClick={() => toggleSection("email")}
                  className="w-full flex items-center justify-between p-3 md:p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="font-bold text-[var(--black)] text-sm md:text-base uppercase">Email:</span>
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
                    <span className="font-bold text-[var(--black)] text-sm md:text-base uppercase">Phone:</span>
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
                    <span className="font-bold text-[var(--black)] text-sm md:text-base uppercase">Address:</span>
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

          {/* Reasonable Privacy Policy Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--black)] to-gray-900 rounded-3xl p-10 md:p-14 mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--orange)] opacity-10 rounded-full blur-3xl"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-8">Reasonable Privacy Policy</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                At our agency, we collect and process personal information from users of our website. This Privacy Policy outlines how we handle this 
                data and the measures we take to protect it.
              </p>
              <div className="h-px bg-gray-600 my-8"></div>
              <p className="text-gray-300 leading-relaxed">
                By accessing our website, you agree to the terms outlined in this policy. We may collect personal 
                information from you in various ways, including when you visit our website, fill out a contact form, request 
                information or quotations, or communicate with us through email, phone, or other channels.
              </p>
            </div>
          </div>

          {/* Information Collection Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-12">
            <h3 className="text-xl font-bold text-[var(--black)] mb-6">Information We Collect</h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                The types of information we may collect include contact information like your name, email address, phone 
                number, and address; business information such as your company name, business address, and industry 
                details; and technical information like your IP address, browser type, operating system, and website usage 
                data.
              </p>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                We use the collected information to respond to your inquiries, facilitate business transactions and 
                communication, improve our products, services, and website experience, comply with legal obligations and 
                regulatory requirements, and maintain internal records and operational processes.
              </p>
              <p className="text-[var(--gray-text)] leading-relaxed">
                We take data security seriously and implement industry-standard measures to protect your personal information. However, no 
                method of transmission over the internet or electronic storage is completely secure, and we cannot 
                guarantee absolute security. We do not sell, trade, or rent your personal information to third parties.
              </p>
            </div>
          </div>

          {/* Data Sharing Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-12">
            <h3 className="text-xl font-bold text-[var(--black)] mb-6">Data Sharing and Your Rights</h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your data with service providers who assist us in operating our business 
                and website, legal authorities if required by law or to protect our rights and interests, and business 
                partners for legitimate business purposes, only with your consent.
              </p>
              <p className="text-[var(--gray-text)] leading-relaxed mb-6">
                Since Vexlure International operates in India and Germany, your data may be transferred and processed in these regions. We ensure compliance 
                with applicable data protection regulations for cross-border data transfers.
              </p>
              <p className="text-[var(--gray-text)] leading-relaxed">
                Depending on your location, you may have the right to access, correct, or update your personal information; request the deletion of 
                your data, subject to legal requirements; withdraw consent where processing is based on consent; and object to data processing for direct 
                marketing purposes.
              </p>
            </div>
          </div>

          {/* Policy Updates Section */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100 mb-12">
            <h3 className="text-xl font-bold text-[var(--black)] mb-4">Policy Updates</h3>
            <p className="text-[var(--gray-text)] leading-relaxed">
              To exercise your rights or request more information, please contact us using the 
              details provided above. We may update this Privacy Policy periodically to reflect changes in our practices 
              or legal requirements. The revised policy will be posted on our website, and continued use of our website 
              indicates your acceptance of the changes.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 bg-[var(--orange)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--orange)]/90 transition-all shadow-lg group"
            >
              <span>INDIVIDUAL SOLUTION</span>
              <HiChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
