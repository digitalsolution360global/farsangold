"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Leaf, Star, Sparkles } from "lucide-react";

export default function GalleryClient() {
  // Gallery images with names and bg colors
  const images = [
    { src: "/products/bhakarwadi.jpeg", name: "Bhakarwadi", bg: "bg-white" },
    { src: "/products/chips.jpeg", name: "Chips", bg: "bg-white" },
    { src: "/products/diet-chakli.jpeg", name: "Diet Chakli", bg: "bg-white" },
    { src: "/products/kachori.jpeg", name: "Kachori", bg: "bg-white" },
    { src: "/products/soyabhel.jpeg", name: "Soyabhel", bg: "bg-white" },
    { src: "/products/wafers.jpeg", name: "Wafers", bg: "bg-white" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* ===== GALLERY BANNER ===== */}
      <section className="relative bg-red-800 pt-40 pb-48 md:pt-52 md:pb-56 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <Leaf className="absolute top-32 left-14 text-white/15 w-20 h-20 animate-pulse" />
        <Star className="absolute top-48 right-20 text-white/15 w-16 h-16" />
        <Sparkles className="absolute bottom-44 left-1/2 text-white/15 w-14 h-14" />

        <div className="max-w-7xl mx-auto px-6 md:text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Our Gallery
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-32 md:h-44">
            <path
              d="M0,60 C360,160 720,20 1080,110 1260,160 1440,140 1440,140 L1440,160 L0,160 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== INTRO BELOW BANNER ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Authentic Farsan for Every Moment
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
            At <span className="font-semibold text-green-700">Farsan Gold</span>,
            we create traditional farsan with authentic Indian flavors,
            perfect for tea-time, festivals, travel, and gifting.
          </p>
        </div>
      </section>

      {/* ===== IMAGE GRID WITH BG & NAME ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform`}
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== POPUP LIGHTBOX ===== */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-auto">
          {/* Fixed width container */}
          <div className="relative w-full max-w-lg rounded-lg shadow-2xl bg-white overflow-hidden">
            <X
              className="absolute top-3 right-3 text-black w-7 h-7 cursor-pointer z-10"
              onClick={() => setSelectedImage(null)}
            />
            {/* Image container with max height */}
            <div className="w-full max-h-screen overflow-auto">
              <Image
                src={selectedImage}
                alt="Selected"
                width={800}
                height={1200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
