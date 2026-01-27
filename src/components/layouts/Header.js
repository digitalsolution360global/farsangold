"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-green-200">

      {/* ================= TOP HEADER ================= */}
      <div className="bg-[#f5f3b5] hidden sm:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src="/logo.png" alt="Farsan" width={60} height={60} />
              <div>
                <h1 className="text-xl font-bold text-green-800">
                  FARSAN<span className="text-red-600">G</span>
                </h1>
                <p className="text-xs text-green-700">Healthy Snacks</p>
              </div>
            </Link>

            {/* Search */}
<div className="flex flex-1 max-w-2xl border border-green-300 rounded-full overflow-hidden bg-white">
  <select className="px-4 text-sm bg-transparent outline-none text-green-800 sm:px-5 sm:py-4">
    <option>All</option>
    <option>Snacks</option>
    <option>Sweets</option>
  </select>
  <input
    type="text"
    placeholder="Search for products..."
    className="flex-1 px-4 text-black text-sm outline-none sm:px-5 sm:py-4"
  />
  <button className="px-5 bg-green-700 text-white sm:px-6 sm:py-4">
    <Search size={18} />
  </button>
</div>


            {/* Icons */}
            <div className="flex items-center gap-5">
              <Heart className="w-6 h-6 text-green-800" />
              <ShoppingCart className="w-6 h-6 text-green-800" />
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM HEADER ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">

            {/* Mobile Logo */}
            <Link href="/" className="flex items-center gap-2 sm:hidden">
              <Image src="/logo.png" alt="Farsan" width={45} height={45} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button className="flex items-center gap-2 font-medium text-green-800">
                All Categories <ChevronDown size={16} />
              </button>

              <nav className="flex items-center gap-8 text-sm font-medium text-gray-700">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/product">Products</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>

            {/* Call + Hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md">
                <Phone size={16} />
                <span className="text-sm font-semibold">01-234-567-890</span>
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-md bg-green-100 text-green-800"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/product" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}

    </header>
  );
}
