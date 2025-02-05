"use client";
import { Quote } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonialsData = [
    {
      name: "John Doe",
      feedback:
        "Sexuloon provided me with the confidence and support I needed to address my concerns. Truly life-changing!",
      image: "/testimonial1.jpg", // Replace with actual image path
    },
    {
      name: "Michael Smith",
      feedback:
        "The expert consultation was incredibly helpful. I feel much more informed and reassured now!",
      image: "/testimonial2.jpg", // Replace with actual image path
    },
    {
      name: "Rahul Verma",
      feedback:
        "Great service! The natural remedies recommended have made a huge difference in my life.",
      image: "/testimonial3.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#131A14] to-[#4D5745] text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-[#E6DCC5] mb-12">
          What Our <span className="text-[#E91E63]">Clients</span> Say
        </h2>

        {/* Testimonial Grid */}
        <div className="flex gap-6 overflow-hidden md:grid md:grid-cols-3 md:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#363B32] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              {/* Circular Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#E91E63]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              {/* Quote Icon */}
              <Quote className="text-[#E91E63] w-6 h-6 mb-4" />

              {/* Testimonial Text */}
              <p className="text-[#E6DCC5] italic text-lg">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>

              {/* Name */}
              <h3 className="text-[#2196F3] text-lg font-bold mt-4">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
