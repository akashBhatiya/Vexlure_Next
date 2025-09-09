"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const CONTACTS = {
  India: {
    phone: "+91 83206-59236",
    address: "Patel Chambers 108, 395006 Surat, India",
    map: "https://www.google.com/maps?q=Patel+Chambers+108,+395006+Surat,+India&output=embed",
  },
  Germany: {
    phone: "+49 15566-345594",
    address: "Heighlofstraße 66, 81377 Munich, Germany",
    map: "https://www.google.com/maps?q=Heighlofstraße+66,+81377+Munich,+Germany&output=embed",
  },
};

export default function ContactUsPage() {
  const [country, setCountry] = useState<"India" | "Germany">("India");
  return (
    <main className="w-full pt-20 pb-16 px-6 md:px-8 flex flex-col items-center bg-[var(--white)]">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="text-center text-[var(--black)] mb-10">
          <div className="text-sm  mb-2">• Contact Us</div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">
            Get in touch now
          </h1>
          <p className="text-[#575757] text-base md:text-lg max-w-2xl mx-auto">
            Have questions or need a custom solution? Our team is ready to
            assist you with prompt, professional support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[var(--black)]">
          {/* Left: Contact Info */}
          <section className="bg-gray-100 rounded-2xl p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold mb-2">We’re Here to Help!</h2>
            <p className="text-[#575757] mb-4">
              From inquiries to solutions, we're just a message away.
            </p>
            <div>
              <div className="font-semibold mb-1">Email</div>
              <div className="flex items-center gap-2 text-orange-500">
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
              <div className="font-semibold mb-1">Phones</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                <div>
                  <div className="text-xs">India</div>
                  <div className="flex items-center gap-2">
                    <FiPhone /> {CONTACTS.India.phone}
                  </div>
                </div>
                <div>
                  <div className="text-xs">Germany</div>
                  <div className="flex items-center gap-2">
                    <FiPhone /> {CONTACTS.Germany.phone}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Address</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/location.svg"
                      alt="map"
                      width={20}
                      height={20}
                    />
                    <span className="block">
                      Patel Chambers 108,
                      <br />
                      395006 Surat,
                      <br />
                      India
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/location.svg"
                      alt="map"
                      width={20}
                      height={20}
                    />
                    <span className="block">
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
          </section>
          {/* Right: Form */}
          <section className="bg-gray-100 rounded-2xl p-8 flex flex-col gap-4">
            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-[#c8c8c8] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-[#c8c8c8] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border border-[#c8c8c8] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium mb-1"
                  >
                    Mobile No.
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Mobile No."
                    className="w-full border border-[#c8c8c8] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to know about"
                  rows={3}
                  className="w-full border border-[#c8c8c8] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
              <div className="text-xs text-gray-500 mb-2">
                <span className="text-orange-500 mr-1">*</span>We promise not to
                disclose your personal information to third parties.
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white rounded-md px-6 py-2 font-semibold flex items-center gap-2 hover:bg-orange-600 transition-all w-fit"
              >
                Send Message <span className="ml-1">↗</span>
              </button>
            </form>
          </section>
        </div>
        {/* Map Section */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setCountry("India")}
              className={`px-5 py-1 rounded-full font-medium border ${
                country === "India"
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              India
            </button>
            <button
              onClick={() => setCountry("Germany")}
              className={`px-5 py-1 rounded-full font-medium border ${
                country === "Germany"
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              Germany
            </button>
          </div>
          <div className="w-full rounded-2xl overflow-hidden">
            <iframe
              src={CONTACTS[country].map}
              width="100%"
              height="680"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${country}`}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
