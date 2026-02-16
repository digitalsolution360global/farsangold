"use client";

import { Leaf, Sparkles, Star } from "lucide-react";

export default function ShopClient() {
  return (
    <>
      {/* ===== SHOP BANNER ===== */}
      <section className="relative bg-red-800 pt-40 pb-48 md:pt-52 md:pb-56 overflow-hidden">

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Floating Icons */}
        <Leaf className="absolute top-24 left-10 text-white/25 w-16 h-16 animate-pulse" />
        <Star className="absolute top-40 right-20 text-white/20 w-14 h-14" />
        <Sparkles className="absolute bottom-32 left-1/2 text-white/20 w-12 h-12" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            About Our Shop
          </h1>

          <p className="mt-6 text-white/90 max-w-3xl mx-auto text-base md:text-lg">
            Discover authentic Indian farsan snacks crafted with premium
            ingredients, timeless recipes and modern hygiene standards.
          </p>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            className="w-full h-28 md:h-36"
          >
            <path
              d="M0,40 C360,120 720,0 1080,80 1260,120 1440,100 1440,100 L1440,150 L0,150 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SHOP CONTENT ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Farsan That Feels Like Home
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Farsan Gold brings you a wide variety of freshly prepared farsan
              snacks inspired by traditional Indian flavors. Every bite is
              crafted with care, using high-quality ingredients and hygienic
              processes.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ Freshly prepared & hygienically packed</li>
              <li>✔ Authentic recipes with modern quality standards</li>
              <li>✔ Perfect for tea-time, travel & gifting</li>
              <li>✔ Loved by families across India</li>
            </ul>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-gray-800">Premium Quality</h3>
              <p className="text-sm text-gray-600 mt-2">
                Only the best ingredients, sourced carefully for great taste.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-green-800">Traditional Taste</h3>
              <p className="text-sm text-gray-600 mt-2">
                Authentic farsan flavors passed down through generations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
              <p className="text-sm text-gray-600 mt-2">
                Carefully packed & delivered fresh to your doorstep.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-gray-800">Trusted Brand</h3>
              <p className="text-sm text-gray-600 mt-2">
                Thousands of happy customers trust Farsan Gold.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== OUR STORY ===== */}
     {/* ===== OUR STORY ===== */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
      Our Story
    </h2>

    {/* Timeline Items */}
    <div className="mt-12 space-y-12">
      {/* 2009 Start */}
      <div className="md:flex md:items-center md:space-x-8">
        <div className="md:w-1/2 md:order-1">
          <p className="text-gray-600 leading-relaxed">
            <strong>2009:</strong> Aash Enterprises was founded with a simple vision: to provide high-quality, authentic Indian farsan snacks that delight families across the country. From our humble beginnings in small-scale kitchens, we focused on taste, hygiene, and customer satisfaction.
          </p>
        </div>
        <div className="md:w-1/2 md:order-2 flex justify-center md:justify-end">
          <div className="bg-white rounded-xl p-6 shadow-sm w-full md:w-80">
            <h4 className="font-semibold text-gray-800">Founded</h4>
            <p className="text-sm text-gray-600 mt-2">
              The journey begins in 2009, focusing on authentic recipes & quality.
            </p>
          </div>
        </div>
      </div>

      {/* Growth Phase */}
      <div className="md:flex md:items-center md:space-x-8 md:flex-row-reverse">
        <div className="md:w-1/2 md:order-2">
          <p className="text-gray-600 leading-relaxed">
            <strong>2012-2015:</strong> We scaled operations, introducing modern production techniques while preserving traditional flavors and recipes that made us loved by our customers.
          </p>
        </div>
        <div className="md:w-1/2 md:order-1 flex justify-center md:justify-start">
          <div className="bg-white rounded-xl p-6 shadow-sm w-full md:w-80">
            <h4 className="font-semibold text-green-800">Growth</h4>
            <p className="text-sm text-gray-600 mt-2">
              Expansion of production capacity and maintaining quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* Present Day */}
      <div className="md:flex md:items-center md:space-x-8">
        <div className="md:w-1/2 md:order-1">
          <p className="text-gray-600 leading-relaxed">
            <strong>Today:</strong> Aash Enterprises is a trusted name in the Indian snack industry. Our dedication, innovation, and commitment to quality ensures every bite brings joy and authenticity.
          </p>
        </div>
        <div className="md:w-1/2 md:order-2 flex justify-center md:justify-end">
          <div className="bg-white rounded-xl p-6 shadow-sm w-full md:w-80">
            <h4 className="font-semibold text-gray-800">Trusted Brand</h4>
            <p className="text-sm text-gray-600 mt-2">
              Loved by families across India for taste, hygiene, and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Feature Highlights */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
        <h4 className="font-semibold text-gray-800">
          Rooted in Tradition
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Recipes and flavors inspired by Indian households since 2009.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
        <h4 className="font-semibold text-gray-800">
          Crafted with Care
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Every batch prepared with attention to quality & hygiene.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
        <h4 className="font-semibold text-gray-800">
          Made for Families
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Snacks perfect for every age and every occasion.
        </p>
      </div>
    </div>

  </div>
</section>



      {/* ===== MISSION & VISION ===== */}
<section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Our Mission & Vision
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        We don’t just make snacks — we deliver trust, taste, and quality in every bite
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Mission */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 p-10 shadow-sm hover:shadow-lg transition">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />

        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Our mission is to bring freshly prepared, hygienic, and authentic
          Indian farsan snacks to every household. By using premium-quality
          ingredients, traditional recipes, and modern food safety standards,
          we strive to provide a consistent and trustworthy snacking experience.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-gray-700">
          <li>✔ Freshly prepared every day</li>
          <li>✔ Strict hygiene and quality control</li>
          <li>✔ Honest pricing with premium taste</li>
        </ul>
      </div>

      {/* Vision */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 p-10 shadow-sm hover:shadow-lg transition">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />

        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Our vision is to build Farsan Gold into one of India’s most trusted
          and loved farsan brands — chosen not only for its taste, but also
          for its quality, hygiene, and reliability.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-gray-700">
          <li>✔ Pan-India presence with local authenticity</li>
          <li>✔ Innovation while preserving tradition</li>
          <li>✔ Long-term customer trust and satisfaction</li>
        </ul>
      </div>

    </div>
  </div>
</section>

    </>
  );
}
