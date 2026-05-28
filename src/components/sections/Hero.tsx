"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import TypeWriter from "@/components/ui/TypeWriter";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/6 rounded-full blur-[120px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <div className="order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm text-blue-400 font-medium">
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100 tracking-tight leading-[1.1] mb-4"
            >
              Full-Stack Developer for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                practical business solutions
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base text-slate-500 mb-6"
            >
              {personalInfo.name} · {personalInfo.location}
            </motion.p>

            {/* TypeWriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6"
            >
              <TypeWriter
                texts={[
                  "Business Websites",
                  "Custom Web Applications",
                  "HR & Recruitment Systems",
                ]}
                speed={70}
                deleteSpeed={35}
                pauseDuration={2500}
              />
            </motion.div>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-10"
            >
              {personalInfo.supportingLine}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 border border-slate-700 hover:border-blue-500/40 text-slate-300 hover:text-slate-100 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-500/5 flex items-center justify-center gap-2"
              >
                View Projects
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column — Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-2xl scale-110" />

              {/* Main Visual Card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0f172a] border border-slate-700/50 overflow-hidden">
                {/* Code-like decoration */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top — Code Block Visual */}
                  <div className="space-y-3">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                      <div className="w-3 h-3 rounded-full bg-green-400/50" />
                    </div>
                    <div className="font-mono text-xs sm:text-sm space-y-2">
                      <p className="text-slate-500">
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-slate-300">developer</span>{" "}
                        <span className="text-blue-400">=</span>{" "}
                        <span className="text-slate-500">{"{"}</span>
                      </p>
                      <p className="text-slate-500 pl-4">
                        <span className="text-slate-400">name</span>:{" "}
                        <span className="text-green-400">&quot;Ziko&quot;</span>,
                      </p>
                      <p className="text-slate-500 pl-4">
                        <span className="text-slate-400">role</span>:{" "}
                        <span className="text-green-400">&quot;Full-Stack&quot;</span>,
                      </p>
                      <p className="text-slate-500 pl-4">
                        <span className="text-slate-400">focus</span>:{" "}
                        <span className="text-green-400">&quot;Business Solutions&quot;</span>,
                      </p>
                      <p className="text-slate-500 pl-4">
                        <span className="text-slate-400">available</span>:{" "}
                        <span className="text-blue-400">true</span>,
                      </p>
                      <p className="text-slate-500">
                        <span className="text-slate-500">{"}"}</span>;
                      </p>
                    </div>
                  </div>

                  {/* Bottom — Glow Accent */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent" />
                    <span className="text-xs text-slate-500 font-mono">
                      ready to build
                    </span>
                    <div className="flex-1 h-[1px] bg-gradient-to-l from-blue-500/50 to-transparent" />
                  </div>
                </div>

                {/* Corner Glow */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px]" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 sm:-right-6 px-4 py-2 bg-[#111827] border border-slate-700/50 rounded-xl shadow-xl"
              >
                <p className="text-xs text-slate-400">Projects</p>
                <p className="text-lg font-bold text-blue-400">2+</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-12 sm:-left-6 px-4 py-2 bg-[#111827] border border-slate-700/50 rounded-xl shadow-xl"
              >
                <p className="text-xs text-slate-400">Focus</p>
                <p className="text-sm font-semibold text-slate-200">Business</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
