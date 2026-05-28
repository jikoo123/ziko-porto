import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziko Rizqillah Akbar — Full-Stack Developer",
  description:
    "Full-Stack Developer who understands client needs and builds practical business solutions: websites, web apps, HR/recruitment systems, dashboards, and AI workflows.",
  applicationName: "Ziko Portfolio",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Web Application Development",
    "Business Websites",
    "HR Systems",
    "Dashboards",
    "API Integration",
    "AI Workflow Systems",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ziko Rizqillah Akbar — Full-Stack Developer",
    description:
      "Business-focused full-stack development for PT/CV/individual businesses. Practical solutions, clean execution, and reliable delivery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziko Rizqillah Akbar — Full-Stack Developer",
    description:
      "Business-focused full-stack development for PT/CV/individual businesses. Practical solutions, clean execution, and reliable delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050814] text-slate-100 selection:bg-blue-500/20 selection:text-slate-100">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-5 focus:left-5 focus:z-[100] focus:rounded-lg focus:bg-[#0b1224] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-100 focus:ring-2 focus:ring-blue-500/40"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
