"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="relative bg-red-900 text-white pt-28 pb-24 md:pb-16">

        {/* Top Curve */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-24 md:h-32"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C360,140 720,0 1080,90 1260,130 1440,100 1440,100 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between gap-14">

            {/* Brand */}
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src="/farsan-gold.png"
                  alt="Farsan Gold Healthy Snacks"
                  width={64}
                  height={64}
                  className="object-contain shrink-0 mix-blend-darken"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    FARSAN<span className="text-green-400">G</span>
                  </h2>
                  <p className="text-red-100 text-sm">Healthy Snacks</p>
                </div>
              </Link>

              <p className="text-red-100 text-sm leading-relaxed">
                Freshly prepared farsan snacks made with premium ingredients,
                delivering authentic taste and trusted quality.
              </p>

              {/* <p className="mt-6 text-green-300 text-xs">
                © {new Date().getFullYear()} Farsan Gold. All rights reserved.
              </p> */}

              {/* FSSI Code */}
              <p className="mt-1 text-red-200 text-l">
                FSSI Code: <strong>13317008000404</strong>
              </p>
            </div>

            {/* Links + Contact */}
            <div className="flex flex-col sm:flex-row gap-16">

              {/* Links */}
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3 text-sm text-red-100">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-red-100">
                  <li className="flex items-center gap-2">
                    <Phone size={16} /> +91 85950 52849
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={16} /> info@farsangold.com
                  </li>
                </ul>

                {/* Social */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-red-800 hover:bg-red-700 transition flex items-center justify-center"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-red-800 hover:bg-red-700 transition flex items-center justify-center"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-red-800 hover:bg-red-700 transition flex items-center justify-center"
                  >
                    <FaTwitter size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>

      {/* ================= DESKTOP FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/918595052849"
        target="_blank"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full items-center justify-center shadow-lg transition"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* ================= MOBILE FIXED BOTTOM BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/farsan-gold.png"
              alt="Farsan Gold"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-bold text-gray-800 text-sm">FarsanG</span>
          </Link>

          {/* Actions */}
          <div className="flex gap-4">
            <a
              href="tel:918595052849"
              className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <Phone size={18} />
            </a>

            <a
              href="https://wa.me/918595052849"
              className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
