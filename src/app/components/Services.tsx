import {
  ClipboardCheck,
  Eye,
  Flame,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // const toggleProducts = (serviceTitle: number) => {
  //   setExpandedService(expandedService === serviceTitle ? null : serviceTitle);
  // };

  return (
    <section className="py-20 bg-gradient-to-br from-[#111B14] via-[#4d4940] to-[#111B14] text-center">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="flex gap-6 mb-12 flex-wrap justify-center">
          <div className="bg-[#363B32] text-white shadow-lg rounded-xl w-48 h-48 flex flex-col justify-center items-center border border-[#4D5745] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-6 md:mb-0">
            <div className="flex justify-center items-center mb-4 text-[#E91E63]">
              <Stethoscope size={50} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-[#E6DCC5] mb-2 text-center">
              Consult with a Doctor
            </h3>
            <a
              href="/doctors"
              className="mt-2 px-4 py-2 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105"
            >
              Book Now
            </a>
          </div>

          <div className="bg-[#363B32] text-white shadow-lg rounded-xl w-48 h-48 flex flex-col justify-center items-center border border-[#4D5745] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-6 md:mb-0">
            <div className="flex justify-center items-center mb-4 text-[#E91E63]">
              <ClipboardCheck size={50} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-[#E6DCC5] mb-2 text-center">
              Self-Assessment
            </h3>
            <a
              href="/self-assessment"
              className="mt-2 px-4 py-2 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105"
            >
              Start Now
            </a>
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-[#E6DCC5] mb-8">
          What We Treat
        </h2>
        <p className="text-lg text-[#E6DCC5] max-w-2xl mx-auto mb-12">
          Discover expert-backed solutions tailored for your health and
          wellness.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`relative bg-[#363B32] text-white shadow-lg rounded-2xl p-8 border border-[#4D5745] transform transition-all duration-300 
      ${
        expandedService === index
          ? "w-[90rem] scale-100"
          : "w-full hover:scale-105"
      }
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
                onClick={() =>
                  setExpandedService(expandedService === index ? null : index)
                }
                className="inline-block px-5 py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105"
              >
                {expandedService === index ? "Close" : "Explore Now"}
              </button>

              {expandedService === index && (
                <div className="mt-6 w-full">
                  <div className="flex overflow-x-auto space-x-6 p-4 pb-0">
                    {service.products.map((product) => (
                      <div
                        key={product.name}
                        className="bg-[#2A2D25] p-10 w-full rounded-lg shadow-lg border border-[#4D5745] transition-all duration-300"
                      >
                        <div className="flex flex-col items-center gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 rounded-lg"
                          />
                          <div className="text-left">
                            <h4 className="text-lg font-semibold text-[#E6DCC5]">
                              {product.name}
                            </h4>
                            <p className="text-sm text-[#E6DCC5]">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-[#E91E63] font-bold">
                                ${product.price}
                              </span>
                              <span className="text-yellow-400">
                                ⭐ {product.rating}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                              <button className="px-3 py-1 bg-gray-700 text-white rounded-lg">
                                -
                              </button>
                              <span className="px-4 text-white">1</span>
                              <button className="px-3 py-1 bg-gray-700 text-white rounded-lg">
                                +
                              </button>
                            </div>
                            <button className="mt-3 px-4 py-2 bg-[#E91E63] text-white rounded-lg hover:bg-[#C2185B]">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="mt-12 px-6 py-3 bg-[#E91E63] text-white font-medium rounded-lg transition duration-300 hover:bg-[#C2185B] hover:scale-105">
          View All Products
        </button>
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
      {
        name: "Delay Spray",
        description: "Fast-acting desensitizer",
        price: 19.99,
        rating: 4.5,
        image: "/images/delay-spray.png",
      },
      {
        name: "Herbal Tablets",
        description: "Natural endurance booster",
        price: 29.99,
        rating: 4.3,
        image: "/images/herbal-tablets.png",
      },
    ],
  },
  {
    title: "Erectile Dysfunction",
    description: "Overcome performance issues with expert-backed treatments.",
    icon: <ShieldCheck size={50} strokeWidth={1.5} />,
    products: [
      {
        name: "ED Tablets",
        description: "Clinically proven treatment",
        price: 49.99,
        rating: 4.8,
        image: "/images/ed-tablets.png",
      },
      {
        name: "Vacuum Device",
        description: "Non-invasive solution",
        price: 89.99,
        rating: 4.2,
        image: "/images/vacuum-device.png",
      },
    ],
  },
  {
    title: "Low Testosterone",
    description: "Boost your energy and health with personalized plans.",
    icon: <Flame size={50} strokeWidth={1.5} />,
    products: [
      {
        name: "Testosterone Booster",
        description: "Improve vitality & strength",
        price: 39.99,
        rating: 4.6,
        image: "/images/testosterone-booster.png",
      },
      {
        name: "Multivitamin",
        description: "Daily nutrient support",
        price: 19.99,
        rating: 4.4,
        image: "/images/multivitamin.png",
      },
    ],
  },
  {
    title: "Porn Addiction",
    description: "Regain control and improve intimacy with expert guidance.",
    icon: <Eye size={50} strokeWidth={1.5} />,
    products: [
      {
        name: "Therapy Sessions",
        description: "One-on-one expert guidance",
        price: 99.99,
        rating: 4.9,
        image: "/images/therapy.png",
      },
      {
        name: "Self-Help Book",
        description: "Science-backed techniques",
        price: 24.99,
        rating: 4.7,
        image: "/images/self-help-book.png",
      },
    ],
  },
];
