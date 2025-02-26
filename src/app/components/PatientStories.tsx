"use client";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PatientStories() {
  const stories = [
    {
      name: "Rahul, 28",
      issue: "Premature Ejaculation",
      story:
        "I was struggling with premature ejaculation for years, which affected my confidence and relationships. After consulting with Sexuloon experts and using their recommended treatment, I gained better control. Now, I feel more confident and can enjoy intimate moments without stress. This has completely transformed my relationship!",
      image: "/testimonialimage.jpg",
    },
    {
      name: "Amit, 32",
      issue: "Erectile Dysfunction",
      story:
        "My self-esteem took a hit when I started experiencing erectile dysfunction. It affected my marriage, and I felt lost. After discovering Sexuloon’s holistic approach, I started their treatment and followed the lifestyle changes they suggested. Within months, I noticed significant improvement. My confidence is back, and so is my happiness.",
      image: "/testimonialimage.jpg",
    },
    {
      name: "Vikram, 40",
      issue: "Low Testosterone",
      story:
        "For years, I suffered from constant fatigue, low energy, and mood swings. I never realized it was due to low testosterone levels. After a detailed consultation, Sexuloon helped me with a customized therapy plan. Within weeks, I felt more energetic, focused, and my mood improved. I feel young again!",
      image: "/testimonialimage.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#131A14] to-[#4D5745] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[hsl(42,40%,84%)] mb-8 sm:mb-12">
          Our <span className="text-[#E91E63]">Patient</span> Stories
        </h2>

        {/* Navigation Arrows & Story Card */}
        <div className="flex justify-center items-center gap-8">
          {/* Left Arrow */}
          <button
            onClick={prevStory}
            className="p-3 sm:p-4 rounded-full bg-gradient-to-b from-[#E91E63] to-[#C2185B] text-white shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Story Card */}
          <div className="bg-[#2E332C] p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center text-center w-[90%] sm:w-[75%] md:w-[55%] lg:w-[50%] transition-opacity duration-500">
            {/* Patient Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 border-2 border-[#E91E63]">
              <Image
                src={stories[currentIndex].image}
                alt={stories[currentIndex].name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>

            {/* Quote Icon */}
            <Quote className="text-[#E91E63] w-6 h-6 sm:w-8 sm:h-8 mb-4" />

            {/* Scrollable Story */}
            <div className="max-h-28 overflow-y-auto thin-scroll px-2">
              <p className="text-[#E6DCC5] italic text-sm sm:text-base">
                &ldquo;{stories[currentIndex].story}&rdquo;
              </p>
            </div>

            {/* Patient Name & Issue */}
            <h3 className="text-[#2196F3] text-md sm:text-lg font-bold mt-4">
              - {stories[currentIndex].name}
            </h3>
            <p className="text-[#E6DCC5] text-xs">({stories[currentIndex].issue})</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextStory}
            className="p-3 sm:p-4 rounded-full bg-gradient-to-b from-[#E91E63] to-[#C2185B] text-white shadow-lg hover:scale-110 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
