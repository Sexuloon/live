import {
  ClipboardList,
  Eye,
  Flame,
  HeartPulse,
  ShieldCheck,
  Stethoscope
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// export function Services() {
//   const [expandedService, setExpandedService] = useState<number | null>(null);
  

const servicesData = [
  {
    title: "Premature Ejaculation",
    description: "Helping you last longer with natural and medical solutions.",
    icon: <HeartPulse size={50} strokeWidth={1.5} />,
    products: [
      { name: "Delay Spray", description: "Fast-acting desensitizer", price: 19.99, rating: 4.5, image: "/ayurvedic medine .jpg" },
      { name: "Herbal Tablets", description: "Natural endurance booster", price: 29.99, rating: 4.3, image: "/ayurvedic medine .jpg" },
      { name: "Delay Spray", description: "Fast-acting desensitizer", price: 19.99, rating: 4.5, image: "/ayurvedic medine .jpg" },
      { name: "Herbal Tablets", description: "Natural endurance booster", price: 29.99, rating: 4.3, image: "/ayurvedic medine .jpg" },
      { name: "Delay Spray", description: "Fast-acting desensitizer", price: 19.99, rating: 4.5, image: "/ayurvedic medine .jpg" },
      { name: "Herbal Tablets", description: "Natural endurance booster", price: 29.99, rating: 4.3, image: "/ayurvedic medine .jpg" },
    ],
  },
  {
    title: "Erectile Dysfunction",
    description: "Overcome performance issues with expert-backed treatments.",
    icon: <ShieldCheck size={50} strokeWidth={1.5} />,
    products: [
      { name: "ED Tablets", description: "Clinically proven treatment", price: 49.99, rating: 4.8, image: "/ayurvedic medine .jpg" },
      { name: "Vacuum Device", description: "Non-invasive solution", price: 89.99, rating: 4.2, image: "/ayurvedic medine .jpg" },
      { name: "ED Tablets", description: "Clinically proven treatment", price: 49.99, rating: 4.8, image: "/ayurvedic medine .jpg" },
      { name: "Vacuum Device", description: "Non-invasive solution", price: 89.99, rating: 4.2, image: "/ayurvedic medine .jpg" },
    ],
  },
  {
    title: "Low Testosterone",
    description: "Boost your energy and strength with effective treatments.",
    icon: <Flame size={50} strokeWidth={1.5} />,
    products: [
      { name: "Testosterone Booster", description: "Natural supplement", price: 39.99, rating: 4.7, image: "/ayurvedic medine .jpg" },
      { name: "Protein Supplement", description: "Enhance muscle growth", price: 59.99, rating: 4.6, image: "/ayurvedic medine .jpg" },
      { name: "Testosterone Booster", description: "Natural supplement", price: 39.99, rating: 4.7, image: "/ayurvedic medine .jpg" },
      { name: "Protein Supplement", description: "Enhance muscle growth", price: 59.99, rating: 4.6, image: "/ayurvedic medine .jpg" },
    ],
  },
  {
    title: "Porn Addiction",
    description: "Overcome compulsive habits with professional guidance.",
    icon: <Eye size={50} strokeWidth={1.5} />,
    products: [
      { name: "Mindfulness Guide", description: "Improve mental discipline", price: 24.99, rating: 4.5, image: "/ayurvedic medine .jpg" },
      { name: "Therapy Sessions", description: "Expert counseling support", price: 99.99, rating: 4.8, image: "/ayurvedic medine .jpg" },
      { name: "Mindfulness Guide", description: "Improve mental discipline", price: 24.99, rating: 4.5, image: "/ayurvedic medine .jpg" },
      { name: "Therapy Sessions", description: "Expert counseling support", price: 99.99, rating: 4.8, image: "/ayurvedic medine .jpg" },
    ],
  },
];


  export function Services() {
    const [selectedCategory, setSelectedCategory] = useState(servicesData[0]);

  return (
    <section className="py-20 bg-gradient-to-br from-[#111B14] via-[#4d4940] to-[#111B14] text-center">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Two Feature Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full mb-12">
           <div className="bg-[#363B32] text-white shadow-lg rounded-2xl p-6 sm:p-8 border border-[#4D5745] transition-all duration-300 hover:scale-105">
             <div className="flex justify-center items-center mb-3 sm:mb-4 text-[#E91E63]">
              <Stethoscope size={50} strokeWidth={1.5} />
             </div>
             <h3 className="text-lg sm:text-2xl font-semibold text-[#E6DCC5] mb-2">
              Consult with a Doctor
             </h3>
             <p className="text-[#E6DCC5] mb-4 sm:mb-6">
               Get expert medical advice from licensed professionals.
             </p>
             <Link href="/consult">
               <button className="px-4 sm:px-5 py-2 sm:py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105">
                 Start Consultation
               </button>
             </Link>
           </div>
           <div className="bg-[#363B32] text-white shadow-lg rounded-2xl p-6 sm:p-8 border border-[#4D5745] transition-all duration-300 hover:scale-105">
             <div className="flex justify-center items-center mb-3 sm:mb-4 text-[#E91E63]">
               <ClipboardList size={50} strokeWidth={1.5} />
             </div>
             <h3 className="text-lg sm:text-2xl font-semibold text-[#E6DCC5] mb-2">
               Self-Assessment
             </h3>
             <p className="text-[#E6DCC5] mb-4 sm:mb-6">
               Check your symptoms and get personalized health insights.
             </p>
             <Link href="/self-assessment">
               <button className="px-4 sm:px-5 py-2 sm:py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105">
                 Take the Test
               </button>
             </Link>
           </div>
         </div>
        <h2 className="text-4xl font-extrabold text-[#E6DCC5] mb-8">What We Treat</h2>
        <p className="text-lg text-[#E6DCC5] max-w-2xl mx-auto mb-12">
          Discover expert-backed solutions tailored for your health and wellness.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {servicesData.map((service, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(service)}
          className={`relative bg-[#363B32] text-white shadow-lg rounded-2xl p-6 border border-[#4D5745] transform transition-all duration-300 
            ${selectedCategory.title === service.title ? "scale-105 border-[#E91E63]" : "hover:scale-105"}`}
        >
          <div className="flex justify-center items-center mb-2 text-[#E91E63]">
            {service.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#E6DCC5]">
            {service.title}
          </h3>
        </button>
      ))}
    </div>

      {/* Products Section */}
      <div className="mt-10 bg-[#2A2D25] p-6 rounded-lg shadow-lg border border-[#4D5745]">
        <h2 className="text-2xl font-bold text-[#E6DCC5] mb-4">{selectedCategory.title} Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedCategory.products.map((product, index) => (
            <div
              key={index}
              className="bg-[#363B32] p-6 rounded-lg shadow-lg border border-[#4D5745] transition-all duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={150}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-[#E6DCC5]">{product.name}</h4>
              <p className="text-sm text-[#E6DCC5]">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-[#E91E63] font-bold">${product.price}</span>
                <span className="text-yellow-400">⭐ {product.rating}</span>
              </div>
              <button className="mt-3 px-4 py-2 bg-[#E91E63] text-white rounded-lg hover:bg-[#C2185B] w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* View All Products Button */}
      <div className="mt-12 text-center">
        <Link href="/all_products">
          <button className="px-6 py-3 bg-[#E91E63] text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-[#C2185B] hover:scale-105">
            View All Products
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
}
