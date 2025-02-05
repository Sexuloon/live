"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import { Footer } from "./components/Footer";
import { Footer } from "../components/Footer";
// import { Header } from "./components/Header";
import { Header } from "../components/Header";

const blogs = [
  {
    id: 1,
    title: "Managing Premature Ejaculation: Tips & Treatments",
    description: "Explore natural and medical solutions to help improve control.",
    link: "/blog/premature-ejaculation",
  },
  {
    id: 2,
    title: "Understanding Erectile Dysfunction & How to Overcome It",
    description: "Learn about causes, treatments, and expert-backed solutions.",
    link: "/blog/erectile-dysfunction",
  },
  {
    id: 3,
    title: "Boosting Testosterone Levels Naturally",
    description: "Discover lifestyle changes and supplements to enhance testosterone.",
    link: "/blog/low-testosterone",
  },
];

const faqs = [
  {
    question: "Why do I face difficulty maintaining an erection?",
    answer: "Erectile dysfunction can be caused by stress, lifestyle, or medical conditions. Consult a doctor for personalized advice.",
  },
  {
    question: "Are natural medicines safe for premature ejaculation?",
    answer: "Yes, many natural treatments like Ayurveda or Unani medicine are effective, but consult an expert before use.",
  },
  {
    question: "How can I overcome performance anxiety?",
    answer: "Practicing mindfulness, reducing stress, and speaking to a therapist can help improve performance anxiety.",
  },
];

export default function KnowledgeHub() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
    return (
      <div className="min-h-screen bg-[#131A14] text-white">
        <Header />
        {/* Hero Section */}
        <section className="text-center py-16 bg-[#4D5745]">
          <h1 className="text-4xl font-bold text-[#E6DCC5] mb-4">Knowledge Hub</h1>
          <p className="text-lg text-[#E6DCC5]">Learn more about mens health through expert articles and FAQs.</p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search topics..."
              className="px-4 py-2 rounded-lg text-black w-3/4 md:w-1/2"
            />
          </div>
        </section>
  
        {/* Blog Section */}
        <section className="container mx-auto px-6 lg:px-12 py-16">
          <h2 className="text-3xl font-bold text-[#E6DCC5] mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-[#363B32] p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold text-[#E6DCC5]">{blog.title}</h3>
                <p className="text-[#E6DCC5] mt-2">{blog.description}</p>
                <Link href={blog.link} className="mt-4 inline-block text-[#E91E63] font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </section>
  
        {/* FAQ Section */}
        <section className="container mx-auto px-6 lg:px-12 py-16">
          <h2 className="text-3xl font-bold text-[#E6DCC5] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#363B32] p-4 rounded-lg cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg text-[#E6DCC5]">{faq.question}</h3>
                  <ChevronDown className={`text-[#E91E63] transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                </div>
                {openFAQ === index && <p className="text-[#E6DCC5] mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>
  
        {/* Anonymous Q&A Section */}
        <section className="container mx-auto px-6 lg:px-12 py-16">
          <h2 className="text-3xl font-bold text-[#E6DCC5] mb-8">Anonymous Q&A</h2>
          <p className="text-[#E6DCC5] mb-6">
            Ask a question anonymously and get expert advice.
          </p>
          <div className="text-center">
            <Link href="/ask-question">
              <button className="px-6 py-3 bg-[#E91E63] text-white font-semibold rounded-lg hover:bg-[#C2185B] transition">
                Ask a Question
              </button>
            </Link>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="text-center py-16 bg-[#4D5745]">
          <h2 className="text-3xl font-bold text-[#E6DCC5] mb-4">Need Personalized Help?</h2>
          <p className="text-lg text-[#E6DCC5] mb-6">Consult with our experts for tailored advice.</p>
          <Link href="/consult">
            <button className="px-6 py-3 bg-[#E91E63] text-white font-semibold rounded-lg hover:bg-[#C2185B] transition">
              Talk to a Doctor
            </button>
          </Link>
        </section>
        <Footer />
      </div>
    );
  }