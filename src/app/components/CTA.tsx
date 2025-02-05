"use client";

export function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#131A14] via-[#4D5745] to-[#26320f] text-white text-center">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold mb-4 text-[#E6DCC5]">
          Take <span className="text-[#E91E63]">Control</span> of Your Health Today
        </h2>
        <p className="text-lg md:text-xl mb-8 text-[#E6DCC5]">
          Consult with our experts and find the right solution for you.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-[#E91E63] text-white text-lg font-semibold rounded-full shadow-md 
          transition duration-300 transform hover:scale-105 hover:bg-[#C2185B]"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
