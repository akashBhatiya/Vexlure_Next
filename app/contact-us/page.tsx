"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

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
  return (
    <main className="w-full pt-25 pb-16 px-5 md:px-8 flex flex-col items-center bg-[var(--white)]">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="text-center max-w-[930px] mx-auto mb-10">
          <span className="text-sm  md:text-base leading-[22px] md:leading-6 font-medium text-[var(--black)] mb-4 block">• Contact Us</span>
          <h2 className="text-2xl md:text-[48px] font-semibold text-[var(--black)] leading-9 md:leading-16 mb-6">
            Get in touch now
          </h2>
          <p className="text-base md:text-xl text-[var(--gray-text)] leading-6 md:leading-8 max-w-[698px] mx-auto">
            Have questions or need a custom solution? Our team is ready to
            assist you with prompt, professional support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-[var(--black)]">
          {/* Left: Contact Info */}
          <section className="bg-gray-100 rounded-2xl p-8 flex flex-col gap-6 md:gap-12 order-2 lg:order-1">
            <div>
            <h2 className="text-2xl leading-9 md:text-[32px] md:leading-[44px] font-semibold mb-3">We’re Here to Help!</h2>
            <p className="text-[#575757] text-sm leading-[22px] md:text-lg md:leading-7 ">
              From inquiries to solutions, we're just a message away.
            </p>
            </div>
            <div>
              <div className="text-xl md:leading-[30px] md:text-2xl leading-9 font-semibold mb-4">Email</div>
              <div className="flex text-sm leading-[22px] md:text-lg md:leading-7 items-center gap-2 text-orange-500">
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
              <div className="text-xl leading-[30px] md:text-2xl md:leading-9 font-semibold mb-1">Phones</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                <div>
                  <div className="text-sm leading-[22px] md:text-lg md:leading-7 mb-2">India</div>
                  <div className="text-sm leading-[22px] md:text-lg md:leading-7 flex items-center gap-2">
                    <FiPhone /> {CONTACTS.India.phone}
                  </div>
                </div>
                <div>
                  <div className="text-sm leading-[22px] md:text-lg md:leading-7 mb-2">Germany</div>
                  <div className="text-sm leading-[22px] md:text-lg md:leading-7 flex items-center gap-2">
                    <FiPhone /> {CONTACTS.Germany.phone}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl leading-[30px] md:text-2xl md:leading-9 font-semibold mb-4">Address</div>
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
                    <span className="block text-sm leading-[22px] md:text-lg md:leading-7">
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
                    <span className="block text-sm leading-[22px] md:text-lg md:leading-7">
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
          <section className="bg-gray-100 rounded-2xl p-8 flex flex-col  order-1 lg:order-2">
            <form className="flex flex-col gap-6 md:gap-10">
              <div className="space-y-4 md:space-y-5">
              <div >
                <label
                  htmlFor="name"
                  className="block text-sm leading-[22px] md:text-lg md:leading-7 font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full text-sm leading-[22px] md:text-lg md:leading-7 border border-[var(--border)] rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm leading-[22px] md:text-lg md:leading-7 font-medium mb-1"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full border text-sm leading-[22px] md:text-lg md:leading-7 border-[var(--border)] rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
              <div className="md:flex gap-4 ">
                <div className="flex-1 mb-4 md:mb-0">
                  <label
                    htmlFor="email"
                    className="block text-sm leading-[22px] md:text-lg md:leading-7 font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border text-sm leading-[22px] md:text-lg md:leading-7 border-[var(--border)] rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="mobile"
                    className="block text-sm leading-[22px] md:text-lg md:leading-7 font-medium mb-1"
                  >
                    Mobile No.
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Mobile No."
                    className="w-full border text-sm leading-[22px] md:text-lg md:leading-7 border-[var(--border)] rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm leading-[22px] md:text-lg md:leading-7 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to know about"
                  rows={3}
                  className="w-full border text-sm leading-[22px] md:text-lg md:leading-7 border-[var(--border)] rounded-md px-5 py-[14px] outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
              <div className="text-sm leading-[22px] md:text-base md:leading-6 text-gray-500 mb-2">
                <span className="text-orange-500 mr-1">*</span>We promise not to
                disclose your personal information to third parties.
              </div>
              </div>
              <div>

              <button
                type="submit"
                className="bg-[var(--orange)] text-sm leading-[22px] md:text-base md:leading-6 text-white rounded-full px-6 py-[10px] font-medium flex items-center gap-2 hover:bg-orange-600 transition-all w-fit"
                >
                Send Message <span className="ml-1">↗</span>
              </button>
                </div>
            </form>
          </section>
        </div>
        {/* Map Section */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex bg-[var(--secondary-bg)] rounded-2xl p-1 gap-1 mb-4">
            <button
              onClick={() => setCountry("India")}
              className={`px-5 py-1 rounded-full font-medium  ${
                country === "India"
                  ? "bg-black text-white"
                  : " text-black "
              }`}
            >
              India
            </button>
            <button
              onClick={() => setCountry("Germany")}
              className={`px-5 py-1 rounded-full font-medium  ${
                country === "Germany"
                  ? "bg-black text-white"
                  : " text-black "
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
