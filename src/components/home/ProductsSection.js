"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const categories = [
  {
    name: "Bhakarwadi",
    image: "/products/bhakarwadi.jpeg",
    desc: "Crispy and spicy traditional snack with authentic Indian taste.",
  },
  {
    name: "Masala Bhakarwadi",
    image: "/products/masala-bhakharwar.jpeg",
    desc: "Extra masaledar bhakarwadi for spicy snack lovers.",
  },
  {
    name: "Kachori",
    image: "/products/kachori.jpeg",
    desc: "Freshly fried kachori filled with rich and flavorful masala.",
  },
  {
    name: "Wafers",
    image: "/products/wafers.jpeg",
    desc: "Light, thin and crunchy wafers perfect for tea time.",
  },
  {
    name: "Chips",
    image: "/products/chips.jpeg",
    desc: "Classic crispy chips made from premium quality potatoes.",
  },
  {
    name: "Farsan Mix",
    image: "/products/soyabhel.jpeg",
    desc: "A tasty mix of crunchy farsan snacks for every occasion.",
  },
  {
    name: "Pudina Soya Katori",
    image: "/products/pudina-soya-katori.jpeg",
    desc: "Healthy soya snack with refreshing pudina flavour.",
  },
  {
    name: "Diet Chakli",
    image: "/products/diet-chakli.jpeg",
    desc: "Light and healthy chakli made for diet-conscious people.",
  },
];

export default function ProductsSection() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <>
      {/* ================= PRODUCTS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="md:text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Explore Our Snacks
            </h2>
            <p className="mt-2 text-gray-600">
              Fresh, tasty & premium quality snacks
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedProduct(cat.name);
                  setOpen(true);
                }}
                className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= POPUP ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Quick Order
            </h3>

            <form className="space-y-4">
              {/* Product */}
              <input
                type="text"
                value={selectedProduct}
                readOnly
                className="w-full border text-black rounded-lg px-4 py-2 bg-gray-100"
              />

              {/* Variant */}
              <select className="w-full border text-black rounded-lg px-4 py-2">
                <option>Select Variant</option>
                <option>Regular</option>
                <option>Masala</option>
                <option>Spicy</option>
              </select>

              {/* Quantity */}
              <input
                type="number"
                placeholder="Quantity (kg / packets)"
                className="w-full border text-black rounded-lg px-4 py-2"
              />

              {/* Mobile */}
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border text-black rounded-lg px-4 py-2"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Submit Order
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
