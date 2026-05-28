"use client";

import { trustMetrics } from "@/data/portfolio";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustStrip() {
  return (
    <ScrollReveal>
      <section className="w-full bg-[#111827]/60 backdrop-blur-sm border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto py-10 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  className="text-3xl md:text-4xl font-bold text-slate-100"
                />
                <p className="text-sm text-slate-400 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
