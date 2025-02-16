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

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`relative bg-[#363B32] text-white shadow-lg rounded-2xl p-8 border border-[#4D5745] transform transition-all duration-300 
                ${expandedService === index ? "w-[90rem] scale-100" : "w-full hover:scale-105"} 
                ${expandedService !== null && expandedService !== index ? "hidden" : ""}`}
            >
              <div className="flex justify-center items-center mb-4 text-[#E91E63]">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#E6DCC5] mb-2">
                {service.title}
              </h3>
              <p className="text-[#E6DCC5] mb-6">{service.description}</p>
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="inline-block px-5 py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105"
              >
                {expandedService === index ? "See Other categories" : "Explore Now"}
              </button>

              {expandedService === index && (
                <div className="mt-6 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
                    {service.products.map((product) => (
                      <div
                        key={product.name}
                        className="bg-[#2A2D25] p-6 rounded-lg shadow-lg border border-[#4D5745] transition-all duration-300"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={150}
                          className="w-full h-auto object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-lg font-semibold text-[#E6DCC5]">
                          {product.name}
                        </h4>
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
              )}
            </div>
          ))}
        </div>
        {/* View All Products Button */}
        <div className="mt-12">
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
      { name: "ED Tablets", description: "Clinically proven treatment", price: 49.99, rating: 4.8, image: "/ed_tablets.jpg" },
      { name: "Vacuum Device", description: "Non-invasive solution", price: 89.99, rating: 4.2, image: "/vacuum_device.jpg" },
    ],
  },
  {
    title: "Low Testosterone",
    description: "Boost your energy and strength with effective treatments.",
    icon: <Flame size={50} strokeWidth={1.5} />,
    products: [
      { name: "Testosterone Booster", description: "Natural supplement", price: 39.99, rating: 4.7, image: "/test_booster.jpg" },
      { name: "Protein Supplement", description: "Enhance muscle growth", price: 59.99, rating: 4.6, image: "/protein_supplement.jpg" },
    ],
  },
  {
    title: "Porn Addiction",
    description: "Overcome compulsive habits with professional guidance.",
    icon: <Eye size={50} strokeWidth={1.5} />,
    products: [
      { name: "Mindfulness Guide", description: "Improve mental discipline", price: 24.99, rating: 4.5, image: "/mindfulness_guide.jpg" },
      { name: "Therapy Sessions", description: "Expert counseling support", price: 99.99, rating: 4.8, image: "/therapy_sessions.jpg" },
    ],
  },
];






// this is the different code 












// import { ClipboardList, Eye, Flame, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export function Services() {
//   const [expandedService, setExpandedService] = useState<number | null>(null);

//   return (
//     <section className="py-20 bg-gradient-to-br from-[#111B14] via-[#4d4940] to-[#111B14] text-center">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
//         {/* Two Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full mb-12">
//           <div className="bg-[#363B32] text-white shadow-lg rounded-2xl p-6 sm:p-8 border border-[#4D5745] transition-all duration-300 hover:scale-105">
//             <div className="flex justify-center items-center mb-3 sm:mb-4 text-[#E91E63]">
//               <Stethoscope size={50} strokeWidth={1.5} />
//             </div>
//             <h3 className="text-lg sm:text-2xl font-semibold text-[#E6DCC5] mb-2">
//               Consult with a Doctor
//             </h3>
//             <p className="text-[#E6DCC5] mb-4 sm:mb-6">
//               Get expert medical advice from licensed professionals.
//             </p>
//             <Link href="/consult">
//               <button className="px-4 sm:px-5 py-2 sm:py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105">
//                 Start Consultation
//               </button>
//             </Link>
//           </div>

//           <div className="bg-[#363B32] text-white shadow-lg rounded-2xl p-6 sm:p-8 border border-[#4D5745] transition-all duration-300 hover:scale-105">
//             <div className="flex justify-center items-center mb-3 sm:mb-4 text-[#E91E63]">
//               <ClipboardList size={50} strokeWidth={1.5} />
//             </div>
//             <h3 className="text-lg sm:text-2xl font-semibold text-[#E6DCC5] mb-2">
//               Self-Assessment
//             </h3>
//             <p className="text-[#E6DCC5] mb-4 sm:mb-6">
//               Check your symptoms and get personalized health insights.
//             </p>
//             <Link href="/self-assessment">
//               <button className="px-4 sm:px-5 py-2 sm:py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105">
//                 Take the Test
//               </button>
//             </Link>
//           </div>
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6DCC5] mb-6 sm:mb-8">
//           What We Treat
//         </h2>
//         <p className="text-base sm:text-lg text-[#E6DCC5] max-w-2xl mx-auto mb-8 sm:mb-12">
//           Discover expert-backed solutions tailored for your health and wellness.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 w-full">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               className={`relative bg-[#363B32] text-white shadow-lg rounded-2xl p-6 sm:p-8 border border-[#4D5745] transform transition-all duration-300 
//                 ${expandedService === index ? "scale-100" : "hover:scale-105"} 
//                 ${expandedService !== null && expandedService !== index ? "hidden sm:block" : ""}`}
//             >
//               <div className="flex justify-center items-center mb-3 sm:mb-4 text-[#E91E63]">
//                 {service.icon}
//               </div>
//               <h3 className="text-lg sm:text-2xl font-semibold text-[#E6DCC5] mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-[#E6DCC5] mb-4 sm:mb-6">{service.description}</p>
//               <button
//                 onClick={() => setExpandedService(expandedService === index ? null : index)}
//                 className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105"
//               >
//                 {expandedService === index ? "See Other categories" : "Explore Now"}
//               </button>

//               {expandedService === index && (
//                 <div className="mt-4 sm:mt-6 w-full">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-4">
//                     {service.products.map((product) => (
//                       <div
//                         key={product.name}
//                         className="bg-[#2A2D25] p-4 sm:p-6 rounded-lg shadow-lg border border-[#4D5745] transition-all duration-300"
//                       >
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           width={300}
//                           height={150} 
//                         className="w-full h-28 sm:h-36 object-cover rounded-lg mb-3 sm:mb-4"
//                         />
//                         <h4 className="text-sm sm:text-lg font-semibold text-[#E6DCC5]">
//                         {product.name}
//                         </h4>
//                         <p className="text-xs sm:text-sm text-[#E6DCC5]">{product.description}</p>
//                         <div className="flex justify-between items-center mt-2 sm:mt-3">
//                           <span className="text-[#E91E63] font-bold">${product.price}</span>
//                           <span className="text-yellow-400">⭐ {product.rating}</span>
//                         </div>
//                         <button className="mt-2 sm:mt-3 px-3 sm:px-4 py-1 sm:py-2 bg-[#E91E63] text-white rounded-lg hover:bg-[#C2185B] w-full">
//                           Add to Cart
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 sm:mt-12">
//           <Link href="/all_products">
//             <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#E91E63] text-white text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-[#C2185B] hover:scale-105">
//               View All Products
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// const servicesData = [
//   {
//     title: "Premature Ejaculation",
//     description: "Helping you last longer with natural and medical solutions.",
//     icon: <HeartPulse size={50} strokeWidth={1.5} />,
//     products: [
//       { name: "Delay Spray", description: "Fast-acting desensitizer", price: 19.99, rating: 4.5, image: "/ayurvedic_medine.jpg" },
//       { name: "Herbal Tablets", description: "Natural endurance booster", price: 29.99, rating: 4.3, image: "/ayurvedic_medine.jpg" },
//     ],
//   },
//   {
//     title: "Erectile Dysfunction",
//     description: "Overcome performance issues with expert-backed treatments.",
//     icon: <ShieldCheck size={50} strokeWidth={1.5} />, 
//     products: [
//       { name: "ED Tablets", description: "Clinically proven treatment", price: 49.99, rating: 4.8, image: "/ed_tablets.jpg" },
//     ],
//   },
//   {
//     title: "Low Testosterone",
//     description: "Boost your energy and strength with effective treatments.", 
//     icon: <Flame size={50} strokeWidth={1.5} />,
//     products: [
//       { name: "Testosterone Booster", description: "Natural supplement", price: 39.99, rating: 4.7, image: "/test_booster.jpg" },
//     ],
//   },
//   {
//     title: "Porn Addiction",
//     description: "Overcome compulsive habits with professional guidance.",
//     icon: <Eye size={50} strokeWidth={1.5} />,
//     products: [
//       { name: "Mindfulness Guide", description: "Improve mental discipline", price: 24.99, rating: 4.5, image: "/mindfulness_guide.jpg" },
//     ],
//   },
// ];