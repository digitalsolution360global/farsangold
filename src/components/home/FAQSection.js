"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Farsan?",
    a: "Farsan is a popular Indian savory snack made from gram flour, spices, and edible oils. It is crispy, flavorful, and enjoyed with tea or as a light snack.",
  },
  {
    q: "Are your farsan products freshly made?",
    a: "Yes, all our farsan snacks are freshly prepared in hygienic conditions using high-quality ingredients to ensure great taste and freshness.",
  },
  {
    q: "Do you use preservatives in farsan?",
    a: "No, we do not use harmful preservatives. Our farsan is prepared using traditional methods to maintain natural taste and quality.",
  },
  {
    q: "How long does farsan stay fresh?",
    a: "When stored in an airtight container, farsan stays fresh for up to 30 days. Keep it away from moisture and direct sunlight.",
  },
  {
    q: "Do you deliver farsan to all locations?",
    a: "Yes, we deliver farsan across multiple cities with fast and reliable delivery. Delivery timelines may vary by location.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Everything you need to know about our Farsan snacks
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-gray-900 hover:bg-gray-100 transition"
              >
                {item.q}
                <ChevronDown
                  className={`transition-transform ${
                    open === i ? "rotate-180 text-green-700" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-5 text-gray-700 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
