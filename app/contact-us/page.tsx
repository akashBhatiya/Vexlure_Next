"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import AnimatedFlexSection from "@/components/Animation/AnimatedFlexSection";

const CONTACTS = {
  India: {
    phone: "+91 83206-59236",
    address: "Patel Chambers 108, 395006 Surat, India",
    map: "https://www.google.com/maps?q=Patel+Chambers,+108,+Kohinoor+Rd,+opp.+Savani+Estate,+Green+Park+Society,+Varachha,+Surat,+Gujarat+395006&output=embed",
  },
  Germany: {
    phone: "+49 15566-345594",
    address: "Heighlofstraße 66, 81377 Munich, Germany",
    map: "https://www.google.com/maps?q=Heighlofstraße+66,+81377+Munich,+Germany&output=embed",
  },
};

export default function ContactUsPage() {
  const [country, setCountry] = useState<"India" | "Germany">("India");
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = () => {
    const newErrors: any = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Mobile validation (optional but if provided, should be valid)
    if (formData.mobile && !/^[0-9+\-\s()]+$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for contacting us! We will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          mobile: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full pt-25 pb-16 px-5 md:px-16 flex flex-col items-center bg-[var(--white)]">
      <div className="max-w-[1440px] w-full mx-auto">
        <AnimatedSection className="flex flex-col gap-3 text-center max-w-[930px] mx-auto mb-10" staggerDelay={0.2}>
          <span className="text-contact-label font-medium text-[var(--black)] block">• Contact Us</span>
          <div className="flex flex-col gap-4">
          <h2 className="text-contact-hero-title font-semibold text-[var(--black)]">
            Get in touch now
          </h2>
          <p className="text-contact-hero-description text-[var(--gray-text)] max-w-[698px] mx-auto">
            Have questions or need a custom solution? Our team is ready to
            assist you with prompt, professional support.
          </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-[var(--black)]">
          {/* Left: Contact Info */}
          <section className="bg-gray-100 rounded-2xl p-8 order-2 lg:order-1">
            <AnimatedSection className="flex flex-col gap-6 md:gap-12" staggerDelay={0.15}>
            <div>
            <h2 className="text-contact-section-title font-semibold mb-3">We're Here to Help!</h2>
            <p className="text-[#575757] text-contact-text">
              From inquiries to solutions, we're just a message away.
            </p>
            </div>
            <div>
              <div className="text-contact-subsection-title font-semibold mb-4">Email</div>
              <div className="flex text-contact-text items-center gap-2 text-orange-500">
                <Image
                  src="/mail.svg"
                  alt="mail"
                  width={20}
                  height={20}
                  className="text-[var(--black)]"
                />{" "}
                <a
                  href="mailto:info@vexlureinternational.com"
                  className="hover:underline"
                >
                  info@vexlureinternational.com
                </a>
              </div>
            </div>
            <div>
              <div className="text-contact-subsection-title font-semibold mb-1">Phones</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                <div>
                  <div className="text-contact-text mb-2">India</div>
                  <div className="text-contact-text flex items-center gap-2">
                    <FiPhone /> {CONTACTS.India.phone}
                  </div>
                </div>
                <div>
                  <div className="text-contact-text mb-2">Germany</div>
                  <div className="text-contact-text flex items-center gap-2">
                    <FiPhone /> {CONTACTS.Germany.phone}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-contact-subsection-title font-semibold mb-4">Address</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                <div>
                  <div className=" flex items-start gap-2 ">
                    <div className="py-[6px]">
                    <Image
                      src="/location.svg"
                      alt="map"
                      width={20}
                      height={20}
                    />
                    </div>
                    <span className="block text-contact-text">
                      Patel Chambers 108,
                      <br />
                      395006 Surat,
                      <br />
                      India
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-2">
                    <div className="py-[6px]">
                    <Image
                      src="/location.svg"
                      alt="map"
                      width={20}
                      height={20}
                    />
                    </div>
                    <span className="block text-contact-text">
                      Heighlofstraße 66,
                      <br />
                      81377 Munich,
                      <br />
                      Germany
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedSection>
          </section>
          
          {/* Right: Form */}
          <section className="bg-gray-100 rounded-2xl p-8 flex flex-col order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-10">
              <AnimatedSection className="space-y-4 md:space-y-5" staggerDelay={0.1}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-contact-text font-medium mb-1"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full border text-contact-text border-${errors.name ? 'red-500' : '[var(--border)]'} rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-contact-text font-medium mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full border text-contact-text border-[var(--border)] rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  />
                </div>
                <div className="md:flex gap-4">
                  <div className="flex-1 mb-4 md:mb-0">
                    <label
                      htmlFor="email"
                      className="block text-contact-text font-medium mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border text-contact-text border-${errors.email ? 'red-500' : '[var(--border)]'} rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="mobile"
                      className="block text-contact-text font-medium mb-1"
                    >
                      Mobile
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Mobile (Optional)"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className={`w-full border text-contact-text border-${errors.mobile ? 'red-500' : '[var(--border)]'} rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white`}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-contact-text font-medium mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What would you like to know about"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full border text-contact-text border-${errors.message ? 'red-500' : '[var(--border)]'} rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <div className="text-contact-label text-gray-500 mb-2">
                  <span className="text-orange-500 mr-1">*</span>We promise not to
                  disclose your personal information to third parties.
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-[var(--orange)] text-[var(--white)] px-6 sm:px-8 py-2 rounded-full text-contact-text font-medium hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <span className="ml-1">↗</span></>
                    )}
                  </button>
                </div>
                
                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-700' 
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </AnimatedSection>
            </form>
          </section>
        </div>
        
        {/* Map Section */}
        <AnimatedFlexSection className="flex flex-col items-center gap-4 mt-8" delay={0.4}>
          <div className="flex bg-[var(--secondary-bg)] rounded-2xl p-1 gap-1 mb-4">
            <button
              onClick={() => setCountry("India")}
              className={`px-5 py-1 rounded-full font-medium ${
                country === "India"
                  ? "bg-black text-white"
                  : "text-black"
              }`}
            >
              India
            </button>
            <button
              onClick={() => setCountry("Germany")}
              className={`px-5 py-1 rounded-full font-medium ${
                country === "Germany"
                  ? "bg-black text-white"
                  : "text-black"
              }`}
            >
              Germany
            </button>
          </div>
          <div className="w-full max-w-[1440px] h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src={CONTACTS[country].map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedFlexSection>
      </div>
    </main>
  );
}
