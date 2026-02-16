"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-red-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* ================= LOGO (LEFT) ================= */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/farsan-gold.png"
              alt="Farsan Gold Healthy Snacks"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-green-800">
                FARSAN<span className="text-red-600">G</span>
              </h1>
              <p className="text-xs text-green-700">Healthy Snacks</p>
            </div>
          </Link>

          {/* ================= MENU (CENTER - DESKTOP) ================= */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-800">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <Link href="/about" className="hover:text-red-600">About Us</Link>
            <Link href="/product" className="hover:text-red-600">Products</Link>
            <Link href="/gallery" className="hover:text-red-600">Gallery</Link>
            <Link href="/contact" className="hover:text-red-600">Contact</Link>
          </nav>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2">

            {/* Mobile Call Icon */}
            <a
              href="tel:+91 85950 52849"
              className="sm:hidden p-2 rounded-md bg-gray-100 text-red-800"
            >
              <Phone size={20} />
            </a>

            {/* Desktop Call Button */}
            <div className="hidden sm:flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md">
              <Phone size={16} />
              <span className="text-sm font-semibold">+91 85950 52849</span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md bg-gray-100 text-red-800"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/product" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
