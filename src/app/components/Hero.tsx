export function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-[#111B14] text-white text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111B14] via-[#41473D] to-[#D9CFB7] opacity-90"></div>
  
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Empowering <span className="text-[#E6007E]">Mens</span> Sexual Health
          </h1>
          <p className="text-lg md:text-xl mt-4 opacity-90">
            Breaking the stigma with expert guidance and natural solutions.
          </p>
  
          <div className="mt-6">
            <a
              href="/services"
              className="inline-block bg-[#E6007E] text-white px-6 py-3 rounded-lg font-semibold text-lg transition hover:bg-[#0094FF] shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    );
  }
  