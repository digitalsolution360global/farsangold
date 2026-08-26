"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag, ArrowRight } from "lucide-react";

/* =====================================================
   PRODUCT TYPE
===================================================== */


/* =====================================================
   PRODUCTS
===================================================== */

const products = [
  {
    name: "SOYA STICKS",
    image: "/products/soya-sticks.jpeg",
    desc: "Crispy and delicious soya sticks made with quality ingredients.",
    packSize: "150g",
    price: 199,
    ingredients:
      "SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  {
    name: "SOYA CHIPS",
    image: "/products/soya-chips.jpeg",
    desc: "Crunchy and flavorful soya chips packed with delicious taste.",
    packSize: "150g",
    price: 199,
    ingredients:
      "SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  // {
  //   name: "PUDINA CHIPS",
  //   image: "/products/pudina-chips.jpeg",
  //   desc: "Crispy chips with a refreshing pudina flavour.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  // {
  //   name: "PALAK CHIPS",
  //   image: "/products/palak-chips.jpeg",
  //   desc: "Crispy palak chips with a delicious spinach flavour.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "SPINACH, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  {
    name: "MULTIGRAIN CHIPS",
    image: "/products/multigrain-chips.jpeg",
    desc: "A delicious blend of multiple grains in a crispy snack.",
    packSize: "150g",
    price: 199,
    ingredients:
      "RAGI, CORN, CHANA, BAJRA, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  {
    name: "RAGI CHIPS",
    image: "/products/ragi-chips.jpeg",
    desc: "Crispy ragi chips made with a flavorful blend of ingredients.",
    packSize: "150g",
    price: 199,
    ingredients:
      "RAGI FLOUR, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  // {
  //   name: "BARLEY CHIPS",
  //   image: "/products/barley-chips.jpeg",
  //   desc: "Crunchy barley chips for a delicious snacking experience.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "BARLEY FLOUR, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  {
    name: "QUINOA CHIPS",
    image: "/products/quinoa-chips.jpeg",
    desc: "Light and crispy quinoa chips with a delicious crunch.",
    packSize: "150g",
    price: 199,
    ingredients:
      "QUINOA FLOUR, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  {
    name: "MAKHANA CHIPS",
    image: "/products/makhana-chips.jpeg",
    desc: "Crispy makhana chips with a satisfying crunch.",
    packSize: "150g",
    price: 199,
    ingredients:
      "MAKHANA POWDER, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  {
    name: "BEETROOT CHIPS",
    image: "/products/beetroot-chips.jpeg",
    desc: "Crunchy beetroot chips with a naturally delicious taste.",
    packSize: "150g",
    price: 199,
    ingredients:
      "BEETROOT JUICE, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  {
    name: "MIX VEGITABLE CHIPS",
    image: "/products/mix-vegetable-chips.jpeg",
    desc: "A crunchy combination of vegetables for a tasty snack.",
    packSize: "150g",
    price: 199,
    ingredients:
      "SPINACH, BEETROOT, CARROT, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  {
    name: "BEETROOT MIXTURE",
    image: "/products/beetroot-mixture.jpeg",
    desc: "A crunchy mixture with the delicious flavour of beetroot.",
    packSize: "150g",
    price: 199,
    ingredients:
      "BEETROOT, RICE FLAX, CORN FLAX, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  // {
  //   name: "RAGI MIXTURE",
  //   image: "/products/ragi-mixture.jpeg",
  //   desc: "A crunchy ragi-based mixture with a flavorful combination.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "RAGI FLOUR, RICE FLAX, CORN FLAX, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  {
    name: "PALAK MIXTURE",
    image: "/products/palak-mixture.jpeg",
    desc: "A delicious crunchy mixture with the unique flavour of spinach.",
    packSize: "150g",
    price: 199,
    ingredients:
      "SPINACH, RICE FLAX, CORN FLAX, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  {
    name: "OATS CHIPS",
    image: "/products/oats-chips.jpeg",
    desc: "Light and crispy oat-based chips for everyday snacking.",
    packSize: "150g",
    price: 199,
    ingredients:
      "OATS FLOUR, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  },

  // {
  //   name: "MILLET CHIPS",
  //   image: "/products/millet-chips.jpeg",
  //   desc: "Crispy millet chips made with a blend of nutritious grains.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "JWAR, BAJRA, RAGI, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  // {
  //   name: "FLOWER MURUKKU",
  //   image: "/products/flower-murukku.jpeg",
  //   desc: "Crispy traditional flower-shaped murukku with a delicious crunch.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  // {
  //   name: "MADRASI MURUKKU",
  //   image: "/products/madrasi-murukku.jpeg",
  //   desc: "Traditional crispy Madrasi murukku with an authentic taste.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  // {
  //   name: "VEG MIX BHUJIYA",
  //   image: "/products/veg-mix-bhujiya.jpeg",
  //   desc: "A crunchy vegetable-based bhujiya mix for every occasion.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "SPINACH, BEETROOT, CARROT, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },

  // {
  //   name: "MILLET SEV MIX",
  //   image: "/products/millet-sev-mix.jpeg",
  //   desc: "A crunchy millet sev mix made with a delicious combination of grains.",
  //   packSize: "150g",
  //   price: 199,
  //   ingredients:
  //     "JWAR, BAJRA, RAGI, SOYA FLOUR, RICE FLOUR, URAD FLOUR, TOPIOCA STARCH, VEGETABLE OIL (PALMOLEIN OIL/COTTON SEED OIL), IODIZED SALT, SPICES & CONDIMENTS.",
  // },
];


/* =====================================================
   COMPONENT
===================================================== */

export default function ProductsSection() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  // IMPORTANT: JS file mein TypeScript type mat lagao
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setDetailsOpen(true);
  };

  const handleShopNow = () => {
    setDetailsOpen(false);
    setOrderOpen(true);
  };

  const closeAll = () => {
    setDetailsOpen(false);
    setOrderOpen(false);
    setSelectedProduct(null);
  };

  
  return (
    <>
      {/* =====================================================
          PRODUCTS SECTION
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Our Products
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Explore Our Snacks
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Fresh, tasty & premium quality snacks made for every occasion.
            </p>
          </div>

                    {/* =====================================================
              PRODUCT CARDS
          ====================================================== */}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                onClick={() => handleProductClick(product)}
                className="group mx-auto w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-[360px] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex min-h-[120px] flex-col items-center justify-center p-5 text-center">
                  {/* Product Title */}
                  <h3 className="text-lg font-bold uppercase leading-snug text-gray-900">
                    {product.name}
                  </h3>

                  {/* View Details */}
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-colors group-hover:text-red-700">
                    View Details
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT DETAILS POPUP
      ====================================================== */}

     {detailsOpen && selectedProduct && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    onClick={() => setDetailsOpen(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setDetailsOpen(false)}
        className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-red-600 hover:text-white"
      >
        <X size={20} />
      </button>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* ================= LEFT : PRODUCT IMAGE ================= */}
        <div className="relative flex min-h-[400px] items-center justify-center bg-gray-50 md:min-h-[600px]">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-10 md:p-14"
          />
        </div>

        {/* ================= RIGHT : PRODUCT DETAILS ================= */}
        <div className="flex flex-col p-6 sm:p-8 md:p-10">

          {/* Label */}
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            Product Details
          </span>

          {/* Title */}
          <h2 className="mt-3 text-2xl font-bold uppercase leading-tight text-gray-900 sm:text-3xl">
            {selectedProduct.name}
          </h2>

          {/* Description */}
          <div className="mt-5">
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-900">
              Description
            </h4>

            <p className="text-sm leading-7 text-gray-600">
              {selectedProduct.desc}
            </p>
          </div>

          {/* Price + Pack Size */}
          <div className="mt-6 grid grid-cols-2 gap-3">

            {/* Pack Size */}
            <div className="rounded-xl bg-gray-100 px-4 py-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Pack Size
              </p>

              <p className="mt-1 font-bold text-gray-900">
                {selectedProduct.packSize}
              </p>
            </div>

            {/* Price */}
            <div className="rounded-xl bg-red-50 px-4 py-4">
              <p className="text-xs uppercase tracking-wide text-red-500">
                Price
              </p>

              <p className="mt-1 font-bold text-red-600">
                ₹{selectedProduct.price}
              </p>
            </div>

          </div>

          {/* Ingredients */}
          <div className="mt-6 rounded-2xl bg-gray-50 p-5">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
              Ingredients
            </h4>

            <p className="text-sm leading-7 text-gray-600">
              {selectedProduct.ingredients}
            </p>
          </div>

          {/* Shop Now */}
          <button
            type="button"
            onClick={handleShopNow}
            className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-red-700"
          >
            <ShoppingBag size={18} />
            Shop Now
          </button>

        </div>
      </div>
    </div>
  </div>
)}

      {/* =====================================================
          QUICK ORDER POPUP
      ====================================================== */}

      {orderOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onClick={closeAll}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeAll}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-7 text-center">

              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
                <ShoppingBag size={24} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Quick Order
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill in your details to place your order.
              </p>

            </div>

            {/* Form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Order submitted successfully!");
              }}
            >

              {/* Product */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Product
                </label>

                <input
                  type="text"
                  value={selectedProduct.name}
                  readOnly
                  className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none"
                />
              </div>

              {/* Pack Size */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Pack Size
                </label>

                <input
                  type="text"
                  value={selectedProduct.packSize}
                  readOnly
                  className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none"
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Price
                </label>

                <input
                  type="text"
                  value={`₹${selectedProduct.price}`}
                  readOnly
                  className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-none"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Quantity
                </label>

                <input
                  type="number"
                  min="1"
                  required
                  placeholder="Enter quantity"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  required
                  placeholder="Enter mobile number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-3 w-full rounded-xl bg-red-600 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
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