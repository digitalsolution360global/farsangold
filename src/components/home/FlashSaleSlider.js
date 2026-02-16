"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";

const categories = [
  { name: "Bhakawari", image: "/products/bhakarwadi.jpeg", products: 50 },
  { name: "Kachori", image: "/products/kachori.jpeg", products: 75 },
  { name: "Wafers", image: "/products/wafers.jpeg", products: 60 },
  { name: "Chips", image: "/products/chips.jpeg", products: 80 },
  { name: "Farsan Mix", image: "/products/soyabhel.jpeg", products: 90 },
];

export default function FlashSaleSection() {
  const swiperRef = useRef(null);

  return (
    <section className="py-16 bg-red-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Heading + Subheading */}
        <div className="md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Farsan Gold Flash Sales</h2>
         <p className="mt-3 text-red-100 max-w-3xl mx-auto leading-relaxed">
        Limited-time flash deals on our freshly prepared farsan snacks.  
        Enjoy authentic taste, premium quality, and irresistible prices —  
        only for a short time. Don’t miss out!
      </p>

        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            loop
            autoplay={{ delay: 3000 }}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center md:items-start bg-white/10 rounded-xl shadow-lg p-6 md:p-8 relative">
                  {/* Left Image */}
                  <div className="w-full md:w-1/2 h-48 md:h-56 relative rounded-xl overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                    <p className="text-red-100 mb-4">{cat.products} Products Available</p>

                    {/* Countdown */}
                    <div className="flex gap-2 text-sm mb-4 flex-wrap">
                      <span className="bg-white/80 text-black px-3 py-1 rounded shadow">{0} Days</span>
                      <span className="bg-white/80 text-black px-3 py-1 rounded shadow">{0} Hours</span>
                      <span className="bg-white/80 text-black px-3 py-1 rounded shadow">{0} Min</span>
                      <span className="bg-white/80 text-black px-3 py-1 rounded shadow">{0} Sec</span>
                    </div>

                    <button className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition">
                      Shop Now →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white/80 text-red-900 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white transition"
          >
            &#8592;
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white/80 text-red-900 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-white transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
