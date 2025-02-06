"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#1D1F1D] text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold text-center text-[#A8B19E] mb-8">
            Contact Us
          </h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#E6DCC5]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 bg-[#363B32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8B19E]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#E6DCC5]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 bg-[#363B32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8B19E]"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-[#E6DCC5]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full h-40 px-4 py-2 mt-2 bg-[#363B32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#A8B19E] resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#A8B19E] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#6C7763] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
