"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] ">
      {/* Background Image */}
      <Image
        src="/banner/b3.webp"   // your image in public/banner folder
        alt="Healthy Farsan Snacks"
        fill
        priority
        className="object-cover object-center sm:object-center md:object-bottom"
      />
    </section>
  );
}
