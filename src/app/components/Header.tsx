// "use client";

// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-[#1D1F1D] text-white py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
      
//         <Link href="/">
//           <Image
//             src="/Sexuloon linkedin banner ..jpg"
//             alt="Sexuloon Logo"
//             width={150}
//             height={50}
//             className="cursor-pointer"
//           />
//         </Link>

        
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

        
//         <nav
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:flex md:space-x-8 md:items-center text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-[#1D1F1D] md:bg-transparent md:shadow-none shadow-md z-20`}
//         >
//           <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 px-4 md:px-0 py-4 md:py-0">
//             <Link href="/" className="hover:text-[#A8B19E]">Home</Link>
//             <Link href="/services" className="hover:text-[#A8B19E]">Services</Link>
//             <Link href="/About" className="hover:text-[#A8B19E]">About Us</Link>
//             <Link href="/knowledge-hub" className="hover:text-[#A8B19E]">Knowledge Hub</Link>
//             <Link href="/all_products" className="hover:text-[#A8B19E]">All Products</Link>
//             <Link href="/contactus" className="hover:text-[#A8B19E]">Contact</Link>
//             <Link
//               href="/contactus"
//               className="md:hidden bg-[#A8B19E] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#6C7763]"
//             >
//               Book Consultation
//             </Link>
//           </div>
//         </nav>

        
//         <Link
//           href="/contactus"
//           className="hidden md:inline-block bg-[#A8B19E] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#6C7763]"
//         >
//           Book Consultation
//         </Link>
//       </div>
//     </header>
//   );
// };
"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-[#1D1F1D] text-white py-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
      
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Sexuloon linkedin banner ..jpg"
            alt="Sexuloon Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 md:items-center text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-[#1D1F1D] md:bg-transparent md:shadow-none shadow-md z-20`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 px-4 md:px-0 py-4 md:py-0">
            <Link href="/" className="hover:text-[#A8B19E]">Home</Link>
            <Link href="/services" className="hover:text-[#A8B19E]">Services</Link>
            <Link href="/About" className="hover:text-[#A8B19E]">About Us</Link>
            

            {/* Knowledge Hub with Dropdown */}
            <div 
  className="relative group cursor-pointer"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  {/* Knowledge Hub Tab */}
  <Link href="/knowledge-hub" className="hover:text-[#A8B19E]">
    <span className="flex items-center">
      Knowledge Hub <ChevronDown className="ml-1" size={16} />
    </span>
  </Link>

  {/* Dropdown Menu (Add pt-2 to reduce gap & prevent disappearing) */}
  {isDropdownOpen && (
    <div className="absolute left-0  w-48 bg-[#2D322D] rounded-lg shadow-lg z-30 ">
      <Link href="/knowledge-hub#articles" className="block px-4 py-2 hover:bg-[#A8B19E]">Articles</Link>
      <Link href="/knowledge-hub#faq" className="block px-4 py-2 hover:bg-[#A8B19E]">FAQs</Link>
      <Link href="/knowledge-hub#qa" className="block px-4 py-2 hover:bg-[#A8B19E]">Anonymous Q&A</Link>
      <Link href="/knowledge-hub#consult" className="block px-4 py-2 hover:bg-[#A8B19E]">Talk to Doctor</Link>
    </div>
  )}
</div>


            <Link href="/all_products" className="hover:text-[#A8B19E]">All Products</Link>
            <Link href="/contactus" className="hover:text-[#A8B19E]">Contact</Link>

            {/* Mobile Book Consultation Button */}
            <Link
              href="/contactus"
              className="md:hidden bg-[#A8B19E] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#6C7763]"
            >
              Book Consultation
            </Link>
          </div>
        </nav>

        {/* Desktop Book Consultation Button */}
        <Link
          href="/contactus"
          className="hidden md:inline-block bg-[#A8B19E] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#6C7763]"
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
};
