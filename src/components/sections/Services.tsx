"use client";

import { services } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Services"
          subtitle="Practical digital solutions tailored to your business needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="group bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
