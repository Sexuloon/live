"use client";
import Image from "next/image";

export function About() {
  return (
    <section className="py-16 bg-[#131A14] text-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        
        
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative p-2 rounded-xl bg-[#131A14]">
          <div className="relative w-full h-[350px] lg:h-[450px] rounded-xl overflow-hidden">
            <Image
              src="/image1.png" 
              alt="About Sexuloon"
              layout="fill"
              objectFit="contain" 
              className="rounded-xl"
            />
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 text-center lg:text-left bg-[#363B32] p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-extrabold text-[#E6DCC5] mb-6">
            About <span className="text-[#E91E63]">Sexuloon</span>
          </h2>
          <p className="text-lg text-[#E6DCC5] mb-6">
            At <span className="font-semibold text-[#4D5745]">Sexuloon</span>, we are dedicated to breaking 
            the stigma around mens sexual health. Our mission is to provide 
            expert-backed solutions and natural remedies for challenges like 
            <span className="text-[#2196F3] font-semibold"> premature ejaculation</span>, 
            <span className="text-[#2196F3] font-semibold"> erectile dysfunction</span>, and 
            <span className="text-[#2196F3] font-semibold"> low testosterone</span>.
          </p>
          <p className="text-lg text-[#E6DCC5] mb-6">
            We believe in <span className="font-semibold text-[#4D5745]">privacy, accessibility, and professional guidance</span>. 
            Whether you are looking for personalized treatment plans or expert consultations, 
            <span className="font-semibold text-[#2196F3]"> we are here to support your journey</span>.
          </p>

          
          <a 
            href="/learn-more" 
            className="px-6 py-3 bg-[#E91E63] text-white font-medium rounded-lg shadow-md 
              transition duration-300 hover:bg-[#2196F3]"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}
