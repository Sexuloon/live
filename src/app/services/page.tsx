"use client";

import { Brain, HeartPulse, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#1D1F1D] text-white py-16 px-4 md:px-12">
        <div className="container mx-auto max-w-6xl space-y-16">
          <section className="text-center">
            <h1 className="text-4xl font-extrabold text-[#A8B19E] mb-4">Our Services</h1>
            <p className="text-lg text-[#E6DCC5] max-w-3xl mx-auto">
              At <strong>Sexuloon</strong>, we provide comprehensive support for mens sexual health with a focus on privacy, professionalism, and personalized care. Our services are tailored to meet the unique needs of every individual.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#A8B19E] mb-6 text-center">What We Treat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg text-center">
                <HeartPulse className="text-[#E91E63] w-12 h-12 mx-auto mb-4" />
                <Link href="/all_products" passHref>
                <h3 className="text-2xl font-semibold text-[#E91E63] mb-2">Premature Ejaculation</h3>
                </Link>
                <p className="text-[#E6DCC5]">
                  Solutions to manage rapid or uncontrollable ejaculation, helping improve control and confidence.
                </p>
              </div>

              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg text-center">
                <Brain className="text-[#E91E63] w-12 h-12 mx-auto mb-4" />
                <Link href="/all_products" passHref>
                <h3 className="text-2xl font-semibold text-[#E91E63] mb-2">Erectile Dysfunction</h3>
                </Link>
                <p className="text-[#E6DCC5]">
                  Treatment options to address difficulties in achieving or maintaining an erection.
                </p>
              </div>

              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg text-center">
                <ShieldCheck className="text-[#E91E63] w-12 h-12 mx-auto mb-4" />
                <Link href="/all_products" passHref>
                <h3 className="text-2xl font-semibold text-[#E91E63] mb-2">Low Testosterone</h3>
                </Link>
                <p className="text-[#E6DCC5]">
                  Managing hormonal imbalances to boost energy, mood, and sexual health.
                </p>
              </div>

              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg text-center">
                <UserCheck className="text-[#E91E63] w-12 h-12 mx-auto mb-4" />
                <Link href="/all_products" passHref>
                <h3 className="text-2xl font-semibold text-[#E91E63] mb-2">Porn Addiction</h3>
                </Link>
                <p className="text-[#E6DCC5]">
                  Support for overcoming compulsive behaviors to improve mental and sexual well-being.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#A8B19E] mb-6 text-center">How We Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-[#A8B19E] mb-2">Natural Medicines</h3>
                <p className="text-[#E6DCC5]">
                  Carefully selected Ayurveda and Unani treatments tailored to individual needs, promoting natural healing.
                </p>
              </div>

              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-[#A8B19E] mb-2">Expert Consultations</h3>
                <p className="text-[#E6DCC5]">
                  Connect with MBBS-certified doctors for accurate diagnoses and personalized treatment plans.
                </p>
              </div>

              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-[#A8B19E] mb-2">AI-Driven Chatbot</h3>
                <p className="text-[#E6DCC5]">
                  Personalized assessments to understand concerns and recommend the best solutions, ensuring quick support.
                </p>
              </div>

              <div className="bg-[#363B32] p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-[#A8B19E] mb-2">Confidential Support</h3>
                <p className="text-[#E6DCC5]">
                  Privacy-focused consultations without the need for personal details, offering complete anonymity.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-[#A8B19E] mb-4">Ready to Take Control?</h2>
            <p className="text-[#E6DCC5] max-w-xl mx-auto mb-6">
              Book a consultation with our experts today and embark on your journey towards improved sexual health and well-being.
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
