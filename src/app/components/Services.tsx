import { Eye, Flame, HeartPulse, ShieldCheck } from "lucide-react";

export function Services() {
  return (
    // <section className="py-20 bg-gradient-to-br from-[#111B14] via-[#41473D] to-[#D9CFB7] text-center">
    <section className="py-20 bg-gradient-to-br from-[#111B14] via-[#4d4940] to-[#111B14] text-center">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-[#E6DCC5] mb-8">
          What We Treat
        </h2>
        <p className="text-lg text-[#E6DCC5] max-w-2xl mx-auto mb-12">
          Discover expert-backed solutions tailored for your health and wellness.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="relative bg-[#363B32] text-white shadow-lg rounded-2xl p-8 border border-[#4D5745]
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex justify-center items-center mb-4 text-[#E91E63]">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#E6DCC5] mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-[#E6DCC5] mb-6">{service.description}</p>

              {/* Button */}
              <a
                href="/services"
                className="inline-block px-5 py-3 bg-[#E91E63] text-white font-medium rounded-lg transition 
                duration-300 hover:bg-[#C2185B] hover:scale-105"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const servicesData = [
  {
    title: "Premature Ejaculation",
    description: "Helping you last longer with natural and medical solutions.",
    icon: <HeartPulse size={50} strokeWidth={1.5} />,
  },
  {
    title: "Erectile Dysfunction",
    description: "Overcome performance issues with expert-backed treatments.",
    icon: <ShieldCheck size={50} strokeWidth={1.5} />,
  },
  {
    title: "Low Testosterone",
    description: "Boost your energy and health with personalized plans.",
    icon: <Flame size={50} strokeWidth={1.5} />,
  },
  {
    title: "Porn Addiction",
    description: "Regain control and improve intimacy with expert guidance.",
    icon: <Eye size={50} strokeWidth={1.5} />,
  },
];
