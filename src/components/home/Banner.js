// "use client";

// import Image from "next/image";

// export default function Banner() {
//   return (
//     <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] ">
//       {/* Background Image */}
//       <Image
//         src="/banner/b3.webp"   // your image in public/banner folder
//         alt="Healthy Farsan Snacks"
//         fill
//         priority
//         className="object-cover object-center sm:object-center md:object-bottom"
//       />
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banner/banner-1.jpeg",
  "/banner/banner2.jpeg",
  "/banner/banner3.jpeg",
  "/banner/banner4.jpeg",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
      
      {/* Slides */}
      {banners.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Healthy Farsan Snacks Banner ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to banner ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
