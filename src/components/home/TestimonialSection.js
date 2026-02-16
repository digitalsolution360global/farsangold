"use client";

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="md:text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-gray-800">
            Real feedback from happy customers
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide">

            {/* Card 1 */}
            <div className="min-w-full px-4">
              <div className="bg-white/90 backdrop-blur rounded-3xl p-10 shadow-xl text-center">
                <p className="text-gray-900 text-lg font-medium leading-relaxed">
                  “ Fast delivery and amazing quality. I received my order
                  exactly on time. Highly recommended! ”
                </p>

                <h4 className="mt-6 font-bold text-gray-900">
                  — Rahul Sharma
                </h4>
                <span className="text-sm text-gray-700">
                  Verified Buyer
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-full px-4">
              <div className="bg-white/90 backdrop-blur rounded-3xl p-10 shadow-xl text-center">
                <p className="text-gray-900 text-lg font-medium leading-relaxed">
                  “ Customer support was excellent and delivery was super fast.
                  Will definitely order again! ”
                </p>

                <h4 className="mt-6 font-bold text-gray-900">
                  — Neha Verma
                </h4>
                <span className="text-sm text-gray-700">
                  Regular Customer
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-slide {
          animation: slide 9s infinite ease-in-out;
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          45% { transform: translateX(0); }
          55% { transform: translateX(-100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
