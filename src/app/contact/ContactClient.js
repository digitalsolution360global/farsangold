"use client";

import { Leaf, Star, Sparkles, Phone, Mail, MapPin } from "lucide-react";

export default function ContactClient() {
  return (
    <>
      {/* ===== CONTACT BANNER ===== */}
      <section className="relative bg-red-800 pt-40 pb-48 md:pt-52 md:pb-56 overflow-hidden">

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Floating Icons */}
        <Leaf className="absolute top-32 left-14 text-white/15 w-20 h-20 animate-pulse" />
        <Star className="absolute top-48 right-20 text-white/15 w-16 h-16" />
        <Sparkles className="absolute bottom-44 left-1/2 text-white/15 w-14 h-14" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Contact Aash Enterprises
          </h1>
          <p className="mt-6 md:mt-8 text-white/85 max-w-3xl mx-auto text-base md:text-lg">
            We’re here to assist with orders, GST inquiries, and general questions.
            Reach out to us and we’ll respond promptly.
          </p>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className="w-full h-32 md:h-44"
          >
            <path
              d="M0,60 C360,160 720,20 1080,110 1260,160 1440,140 1440,140 L1440,160 L0,160 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== CONTACT HEADER ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto md:text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We’re here to help with orders, GST inquiries, and general business queries.
          </p>
        </div>
      </section>

      {/* ===== ADDRESS + FORM ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ===== ADDRESS ===== */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl  font-semibold text-green-800 mb-6">
              Our Office
            </h2>

            <div className="space-y-5 text-gray-600 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-green-700" />
                <p>
                  AASH ENTERPRISES<br />
                  E-133, Gali No. 6, Sangam Vihar<br />
                  New Delhi-110080
                </p>

                 <p>
                  AASH ENTERPRISES<br />
                  H.NO 726, 4th floor, Chirag Delhi-110017<br />
                  New Delhi-110080
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-green-700" />
                <p>+91 85950 52849</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="text-green-700" />
                <p>info@aashenterprises.com</p>
              </div>

              <div className="flex gap-3 items-center">
                <span className="font-medium text-green-700">GST No.:</span>
                <p>07AVOPP8792P1Z7</p>
              </div>

              <div className="flex gap-3 items-center">
                <span className="font-medium text-green-700">Registered Address:</span>
                <p>H. No. 726, 4th Floor, Chirag Delhi-110017</p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-5">
              <p className="text-green-800 font-medium text-sm">
                Business Hours
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Monday – Saturday: 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* ===== CONTACT FORM ===== */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full text-black border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border text-black rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border text-black rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border text-black rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="w-full h-[420px]">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          src="https://www.google.com/maps?q=Sangam%20Vihar%2C%20New%20Delhi&output=embed"
        ></iframe>
      </section>
    </>
  );
}
