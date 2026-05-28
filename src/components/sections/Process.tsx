"use client";

import { processSteps } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="How I Work"
          subtitle="A structured approach to deliver results you can rely on."
        />

        {/* ── Desktop: Horizontal Timeline ─────────────────────────────── */}
        <div className="hidden lg:block">
          <div className="flex flex-row items-start justify-between">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;

              return (
                <ScrollReveal
                  key={step.step}
                  delay={index * 0.15}
                  className="flex-1 flex flex-col items-center text-center relative"
                >
                  {/* Circle + Connector Row */}
                  <div className="flex items-center w-full justify-center mb-6">
                    {/* Left connector */}
                    {index > 0 && (
                      <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500/10 to-blue-500/30" />
                    )}
                    {index === 0 && <div className="flex-1" />}

                    {/* Step circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Right connector */}
                    {!isLast && (
                      <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500/30 to-blue-500/10" />
                    )}
                    {isLast && <div className="flex-1" />}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 px-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed px-3 max-w-[220px]">
                    {step.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ── Mobile / Tablet: Vertical Timeline ──────────────────────── */}
        <div className="lg:hidden relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/30 via-blue-500/20 to-blue-500/10" />

          <div className="space-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={step.step} delay={index * 0.1}>
                  <div className="flex items-start gap-6 relative">
                    {/* Step circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#0a0f1e] border-2 border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-slate-100 mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
