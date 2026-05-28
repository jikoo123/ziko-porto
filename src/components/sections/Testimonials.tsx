"use client";

import { valuePropositions } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Why Work With Me"
          subtitle="What sets my work apart from the rest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valuePropositions.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-100 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
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
