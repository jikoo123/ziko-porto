"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Mail,
  MessageSquare,
  BriefcaseBusiness,
  Code2,
  Send,
  ArrowUpRight,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build mailto link with form data
    const mailtoSubject = encodeURIComponent(
      formData.subject || "Project Inquiry"
    );
    const mailtoBody = encodeURIComponent(
      `Hi Ziko,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.open(mailtoLink, "_self");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  // Clean phone number for wa.me link
  const waNumber = personalInfo.whatsapp.replace(/[^0-9]/g, "");

  const inputClasses =
    "w-full bg-[#0a0f1e] border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── Left Column: Contact Form ─────────────────────────────── */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-300 mb-2 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300 mb-2 block"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-300 mb-2 block"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-300 mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span>Email Client Opened ✓</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* ── Right Column: Contact Info ────────────────────────────── */}
          <ScrollReveal className="lg:col-span-2" direction="right" delay={0.15}>
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group block bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-green-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-1">WhatsApp</p>
                    <div className="flex items-center gap-2">
                      <p className="text-slate-200 font-medium group-hover:text-green-400 transition-colors">
                        {personalInfo.whatsapp}
                      </p>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-green-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Social Links */}
              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
                <p className="text-sm text-slate-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-12 h-12 rounded-xl bg-[#111827] border border-slate-800 hover:border-blue-500/30 flex items-center justify-center transition-all text-slate-400 hover:text-blue-400"
                  >
                    <BriefcaseBusiness className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-12 h-12 rounded-xl bg-[#111827] border border-slate-800 hover:border-blue-500/30 flex items-center justify-center transition-all text-slate-400 hover:text-blue-400"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Chat Note */}
              <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/10 rounded-2xl p-6">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Prefer a quick chat? Send a WhatsApp message and I&apos;ll
                  reply as soon as possible.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
