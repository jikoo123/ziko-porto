"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { Code2, BriefcaseBusiness, Mail, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: personalInfo.github,
      icon: Code2,
      label: "GitHub",
    },
    {
      href: personalInfo.linkedin,
      icon: BriefcaseBusiness,
      label: "LinkedIn",
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <>
      <footer className="bg-[#0a0f1e] border-t border-slate-800/50 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Name & Role */}
            <div className="text-center md:text-left">
              <p className="text-slate-300 font-medium">{personalInfo.name}</p>
              <p className="text-slate-500 text-sm">{personalInfo.role}</p>
            </div>

            {/* Center: Copyright */}
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Ziko Rizqillah Akbar. All rights
              reserved.
            </p>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-blue-500/10 hover:text-blue-400 flex items-center justify-center transition-all text-slate-400"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 flex items-center justify-center text-blue-400 transition-all cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
