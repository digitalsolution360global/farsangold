"use client";

import { Cookie, Pizza, Candy, Leaf } from "lucide-react";
import Image from "next/image";

export default function DeliveryBanner() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-red-600 px-6 py-24 md:px-12 flex flex-col md:flex-row items-center">

          {/* DARK SHADE OVERLAY */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* ===== FLOATING ICONS LEFT ===== */}
          <Cookie className="hidden md:block absolute left-6 top-14 w-12 h-12 text-white/70 animate-floatSlow" />
          <Pizza className="hidden md:block absolute left-24 bottom-20 w-14 h-14 text-yellow-300 animate-floatFast" />

          {/* ===== FLOATING ICONS RIGHT ===== */}
          <Candy className="hidden md:block absolute right-8 top-16 w-12 h-12 text-white/70 animate-floatFast" />
          <Leaf className="hidden md:block absolute right-28 bottom-16 w-14 h-14 text-lime-300 animate-floatSlow" />

          {/* LEFT IMAGE (DELIVERY MAN) */}
          <div className="relative md:absolute md:left-8 md:-bottom-10 w-52 h-60 md:w-64 md:h-72 z-10">
            <Image
              src="/banner/delivery-man.png"
              alt="Fast Delivery"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="md:ml-56 flex-1 pl-10 md:text-center md:text-left z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              We Deliver on Next Day{" "}
              <span className="text-green-300">
                10:00 AM to 08:00 PM
              </span>
            </h2>

            <p className="mt-3 text-white/90 text-sm md:text-base">
              For orders starting from{" "}
              <span className="font-semibold">100</span>
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-white text-sm font-medium hover:bg-red-700 transition">
              Shop Now →
            </button>
          </div>

        </div>
      </div>

      {/* FLOATING ANIMATIONS */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
