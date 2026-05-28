"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects, type Project } from "@/data/portfolio";

function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/40 px-3 py-1 text-xs text-slate-300">
      {label}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="#contact"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
      >
        Discuss This Project
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>

      {project.caseStudyUrl ? (
        <a
          href={project.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-blue-500/40 hover:bg-blue-500/5"
        >
          View Case Study
          <FileText className="h-4 w-4 text-slate-400" />
        </a>
      ) : project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-blue-500/40 hover:bg-blue-500/5"
        >
          View Live
          <ExternalLink className="h-4 w-4 text-slate-400" />
        </a>
      ) : (
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-blue-500/40 hover:bg-blue-500/5"
        >
          Request Details
          <FileText className="h-4 w-4 text-slate-400" />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group h-full rounded-2xl border border-slate-800 bg-[#0b1224] p-8 transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-400 leading-relaxed">{project.summary}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Impact
            </p>
            <p className="mt-2 text-slate-300 leading-relaxed">{project.impact}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition-all hover:bg-blue-500/15"
            >
              Live
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition-all hover:bg-blue-500/15"
            >
              Discuss
              <ArrowRight className="h-4 w-4" />
            </a>
          )}

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-blue-500/40 hover:bg-blue-500/5"
          >
            Ask for Full Details
          </a>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const secondary = projects.filter((p) => p.id !== featured.id);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Case studies that show practical value, clean execution, and real business impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0b1224] to-[#060a14] p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                  Primary Case Study
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/40 px-3 py-1 text-xs text-slate-300">
                  In Production
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
                {featured.title}
              </h3>
              <p className="mt-4 text-slate-400 text-lg leading-relaxed">
                {featured.summary}
              </p>

              <div className="mt-8 grid gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Problem
                  </p>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    {featured.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Solution
                  </p>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    {featured.solution}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Result
                  </p>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    {featured.impact}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featured.techStack.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <ProjectLinks project={featured} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" direction="right" delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-[#0b1224] p-7">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  What This Shows
                </p>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Strong client understanding translated into a clear HR workflow
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Clean implementation that stays reliable after handover
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Practical automation that reduces manual effort for the team
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-500/8 to-transparent p-7">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Typical Deliverables
                </p>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Requirements mapping, UI flow, clean database design, admin
                  panel, audit-friendly reporting, deployment, and iteration
                  based on real usage.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {secondary.length > 0 && (
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondary.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

