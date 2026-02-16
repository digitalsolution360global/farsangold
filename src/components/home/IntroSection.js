"use client";

export default function IntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 md:text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Aash Enterprises
        </h1>

        {/* Sub Heading */}
        <p className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
          Authentic Farsan & Traditional Indian Snacks
        </p>

        {/* Paragraphs */}
        <div className="mt-8 space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Aash Enterprises is a trusted name in the world of farsan and
            traditional Indian snacks. We specialize in crafting fresh,
            hygienic and flavour-packed snacks that bring the true taste of
            tradition to your table.
          </p>

          <p>
            From crispy Bhakarwadi and spicy Kachori to healthy diet snacks and
            premium wafers, every product is prepared using quality ingredients
            and time-tested recipes. Our mission is simple — deliver taste,
            quality and freshness in every bite.
          </p>
        </div>

      </div>
    </section>
  );
}
