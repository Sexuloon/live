"use client";
import { Quote } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonialsData = [
    {
      name: "Rajesh Sharma",
      feedback:
        "Sexuloon provided me with the confidence and support I needed to address my concerns. Truly life-changing!",
      image: "/testimonialimage.jpg", 
    },
    {
      name: "Kartik Iyer",
      feedback:
        "The expert consultation was incredibly helpful. I feel much more informed and reassured now!",
      image: "/testimonialimage.jpg", 
    },
    {
      name: "Amit Patel",
      feedback:
        "Great service! The natural remedies recommended have made a huge difference in my life.",
      image: "/testimonialimage.jpg", 
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#131A14] to-[#4D5745] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[hsl(42,40%,84%)] mb-8 sm:mb-12">
          What Our <span className="text-[#E91E63]">Patients</span> Say
        </h2>

        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#363B32] p-6 sm:p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 border-2 border-[#E91E63]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              
              <Quote className="text-[#E91E63] w-6 h-6 sm:w-8 sm:h-8 mb-4" />

          
              <p className="text-[#E6DCC5] italic text-base sm:text-lg">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>

            
              <h3 className="text-[#2196F3] text-md sm:text-lg font-bold mt-4">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
