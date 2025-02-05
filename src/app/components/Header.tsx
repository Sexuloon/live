"use client"

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-[#1D1F1D] text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/sexuloon.jpg"
            alt="Sexuloon Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link href="/" className="hover:text-[#A8B19E]">Home</Link>
          <Link href="/services" className="hover:text-[#A8B19E]">Services</Link>
          <Link href="/about" className="hover:text-[#A8B19E]">About Us</Link>
          <Link href="/knowledge-hub" className="hover:text-[#A8B19E]">Knowledge Hub</Link>
          <Link href="/contact" className="hover:text-[#A8B19E]">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/consultation"
          className="bg-[#A8B19E] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#6C7763]"
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
};
