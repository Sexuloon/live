"use client";

import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaMale, FaStar, FaTimesCircle, FaVial } from "react-icons/fa";
// import { Header } from "./components/Header";
import { Header } from "../components/Header";

type Product = {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  rating: number;
  image: string;
};

type ProductCategories = Record<string, Product[]>;

const categories = [
  { name: "All Products", icon: <FaHeart size={20} /> },
  { name: "Premature Ejaculation", icon: <FaTimesCircle size={20} /> },
  { name: "Erectile Dysfunction", icon: <FaMale size={20} /> },
  { name: "Low Testosterone", icon: <FaVial size={20} /> },
  { name: "Porn Addiction", icon: <FaHeart size={20} /> },
];

const products: ProductCategories = {
  "Premature Ejaculation": [
    { id: 1, name: "Delay Spray", price: "₹499", originalPrice: "₹799", rating: 4.5, image: "https://source.unsplash.com/200x150/?medicine" },
    { id: 2, name: "Natural Stamina Booster", price: "₹699", originalPrice: "₹999", rating: 4.8, image: "https://source.unsplash.com/200x150/?herbal" },
  ],
  "Erectile Dysfunction": [
    { id: 3, name: "ED Treatment Pills", price: "₹999", originalPrice: "₹1499", rating: 4.2, image: "https://source.unsplash.com/200x150/?pills" },
  ],
  "Low Testosterone": [
    { id: 4, name: "Testosterone Booster", price: "₹1299", originalPrice: "₹1799", rating: 4.3, image: "https://source.unsplash.com/200x150/?vitamins" },
    { id: 5, name: "Energy Capsules", price: "₹899", originalPrice: "₹1299", rating: 4.7, image: "https://source.unsplash.com/200x150/?supplements" },
  ],
  "Porn Addiction": [
    { id: 6, name: "Mindfulness Therapy Guide", price: "₹599", originalPrice: "₹899", rating: 4.4, image: "https://source.unsplash.com/200x150/?selfcare" },
  ],
};

const allProducts = Object.values(products).flat();

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const displayedProducts = selectedCategory === "All Products" ? allProducts : products[selectedCategory] || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#1C1F1A]">
      {/* <Header /> */}
      <Header/>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar (Desktop) */}
        <aside className="hidden md:block md:w-1/5 bg-[#2E332D] p-4 shadow-md">
          <h2 className="text-lg font-semibold text-[#EAE3D2] mb-4">Categories</h2>
          <div className="space-y-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 p-2 rounded-lg w-full ${
                  selectedCategory === category.name ? "bg-[#647056] text-white" : "hover:bg-[#3F423A] text-[#EAE3D2]"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-[#F5F2EB]">
          <h1 className="text-2xl font-bold text-[#2E332D] mb-6">{selectedCategory} Products</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <Image src={product.image} alt={product.name} width={200} height={150} className="w-full rounded-md" />
                  <div className="mt-3">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                    <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xl font-bold text-[#647056]">{product.price}</span>
                      <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="mt-3 bg-[#647056] text-white py-2 px-4 rounded-md w-full hover:bg-[#4A5748]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products available in this category.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
