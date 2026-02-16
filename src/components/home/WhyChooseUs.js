"use client";

import { ShieldCheck, Leaf, ThumbsUp, Truck } from "lucide-react";

const reasons = [
  {
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: "Fresh & Hygienic Snacks",
    desc: "Every snack is freshly prepared daily with strict hygiene and quality standards.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: "Premium Quality Ingredients",
    desc: "We use carefully selected raw materials and authentic spices for superior taste.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-green-600" />,
    title: "Authentic Taste",
    desc: "Traditional recipes that deliver the comforting, homemade taste you love.",
  },
  {
    icon: <Truck className="w-10 h-10 text-green-600" />,
    title: "Fast & Safe Delivery",
    desc: "Quick, secure packaging and delivery to keep freshness perfectly intact.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Our Shop?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Taste, quality, and trust — everything you need in one place
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center border border-red-200 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
