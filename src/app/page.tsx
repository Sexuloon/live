"use client"

import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
// import { PatientStories } from "./components/PatientStories";
import PatientStories from "./components/PatientStories";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full h-full">
  <Header />
  <main className="flex-1 container mx-auto  w-full h-full">
    <Hero />
    <Services />
    <About />
    <PatientStories />
    <Testimonials />
    <CTA /> 
  </main>
  <Footer />
</div>
  );
}
