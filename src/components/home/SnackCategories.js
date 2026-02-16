"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const categories = [
  { name: "Bhakawari", image: "/products/bhakarwadi.jpeg", products: 50 },
  { name: "Kachori", image: "/products/kachori.jpeg", products: 75 },
  { name: "Wafers", image: "/products/wafers.jpeg", products: 60 },
  { name: "Chips", image: "/products/chips.jpeg", products: 80 },
  { name: "Farsan Mix", image: "/products/soyabhel.jpeg", products: 90 },
];

export default function SnackCategories() {
  const [selectedSnack, setSelectedSnack] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 md:text-center">
            Explore Our Snacks
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {categories.map((cat, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedSnack(cat.name);
                  setOpen(true);
                }}
                className="cursor-pointer flex flex-col items-center bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition w-full max-w-[200px]"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mb-4 rounded-full bg-white relative overflow-hidden">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 text-center">
                  {cat.products}+ Products
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Quick Order
            </h3>

            <form className="space-y-4">
              {/* Snack Name */}
              <input
                type="text"
                value={selectedSnack || ""}
                readOnly
                className="w-full border text-black rounded-lg px-4 py-2 bg-gray-100"
              />

              {/* Snack Dropdown */}
              <select className="w-full border text-black rounded-lg px-4 py-2">
                <option>Select Snack Variant</option>
                <option>Regular</option>
                <option>Masala</option>
                <option>Spicy</option>
              </select>

              {/* Quantity */}
              <input
                type="number"
                placeholder="Quantity (kg / packets)"
                className="w-full border  text-black rounded-lg px-4 py-2"
              />

              {/* Mobile */}
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border text-black rounded-lg px-4 py-2"
              />

              {/* Button */}
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
