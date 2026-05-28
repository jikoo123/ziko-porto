"use client";

import { aboutText, aboutHighlights, personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Building reliable systems for real businesses."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column — Bio & Highlights */}
          <ScrollReveal direction="left" delay={0.1}>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {aboutText}
            </p>

            <ul className="space-y-4">
              {aboutHighlights.map((highlight, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                  <span className="text-slate-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right Column — Decorative Code Card */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-slate-800 p-8 md:p-10">
              {/* Terminal-style header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-slate-500 font-mono">
                  ~/about.config
                </span>
              </div>

              {/* Code-style content */}
              <div className="font-mono text-sm leading-loose space-y-3">
                <div>
                  <span className="text-slate-500">{"// "}</span>
                  <span className="text-slate-400 italic">
                    {personalInfo.name}
                  </span>
                </div>

                <div className="h-px bg-slate-800 my-4" />

                <CodeLine label="Name" value={personalInfo.firstName} />
                <CodeLine label="Role" value={personalInfo.role} />
                <CodeLine label="Focus" value="Business Solutions" />
                <CodeLine label="Approach" value="Client-First" />
                <CodeLine label="Code" value="Clean & Maintainable" />
                <CodeLine label="Location" value={personalInfo.location} />

                <div className="h-px bg-slate-800 my-4" />

                <div>
                  <span className="text-slate-500">{"// "}</span>
                  <span className="text-green-400/80 italic text-xs">
                    Ready to build something great
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Inline helper ──────────────────────────────────────────────────────────── */

function CodeLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-blue-400">{label}</span>
      <span className="text-slate-500">{": "}</span>
      <span className="text-slate-200">&quot;{value}&quot;</span>
      <span className="text-slate-500">;</span>
    </div>
  );
}
