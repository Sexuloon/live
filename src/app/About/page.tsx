"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#1D1F1D] text-white py-16 px-4 md:px-12">
        <div className="container mx-auto max-w-5xl space-y-12">
          <section className="text-center">
            <h1 className="text-4xl font-extrabold text-[#A8B19E] mb-4">About Us</h1>
            <p className="text-lg text-[#E6DCC5]">
              At <strong>Sexuloon</strong>, our mission is to eliminate the stigma surrounding mens sexual health
              in India. We provide a safe, private, and judgment-free platform where men can address concerns
              like premature ejaculation, erectile dysfunction, and more with confidence.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#A8B19E] mb-4">What We Treat</h2>
            <ul className="list-disc list-inside space-y-2 text-[#E6DCC5]">
              <li><strong>Premature Ejaculation:</strong> Rapid or uncontrollable ejaculation during sexual activity.</li>
              <li><strong>Erectile Dysfunction:</strong> Difficulty achieving or maintaining an erection.</li>
              <li><strong>Low Testosterone:</strong> Reduced testosterone levels affecting energy and mood.</li>
              <li><strong>Porn Addiction:</strong> Compulsive behavior impacting mental and sexual health.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#A8B19E] mb-4">Our Knowledge Hub</h2>
            <p className="text-[#E6DCC5]">
              Empower yourself with our expert-curated resources:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#E6DCC5]">
              <li><strong>Blogs & Articles:</strong> Insights on managing sexual health effectively.</li>
              <li><strong>FAQs:</strong> Common questions answered by professionals.</li>
              <li><strong>Anonymous Q&A Forum:</strong> Ask your questions without revealing your identity.</li>
              <li><strong>Real Stories:</strong> Inspiring testimonials from individuals overcoming similar challenges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#A8B19E] mb-4">Your Privacy Matters</h2>
            <p className="text-[#E6DCC5]">
              We ensure complete confidentiality. No names, phone numbers, or personal details are required to access our services.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-[#A8B19E] mb-4">Get Started with Expert Support</h2>
            <p className="text-[#E6DCC5] mb-6">
              Ready to take control of your sexual health? Book a consultation with our expert doctors today.
            </p>
            <a
              href="/contactus"
              className="inline-block bg-[#A8B19E] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#6C7763] transition-colors"
            >
              Book Consultation
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
