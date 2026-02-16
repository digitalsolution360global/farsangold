"use client";

import { Leaf, Sparkles, Star } from "lucide-react";
import ProductsSection from "@/components/home/ProductsSection";

export default function ProductClient() {
  return (
    <>
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
            Our Products
          </h1>

          <p className="mt-8 text-white/85 max-w-3xl mx-auto text-base md:text-lg">
            Discover our wide range of freshly prepared farsan,
            crafted with authentic Indian flavors and premium ingredients.
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

      {/* ===== INTRO SECTION ===== */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Authentic Farsan for Every Moment
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
            At{" "}
            <span className="font-semibold text-green-700">Farsan Gold</span>,
            we believe great taste comes from tradition, quality ingredients
            and careful preparation. Our products are perfect for tea-time,
            festivals, travel and gifting.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800">Fresh & Hygienic</h3>
              <p className="text-sm text-gray-600 mt-2">
                Prepared daily with strict quality control.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-green-800">Traditional Taste</h3>
              <p className="text-sm text-gray-600 mt-2">
                Authentic recipes loved across generations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800">Perfect for Gifting</h3>
              <p className="text-sm text-gray-600 mt-2">
                A delicious choice for every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS LIST ===== */}
      <ProductsSection />
    </>
  );
}
