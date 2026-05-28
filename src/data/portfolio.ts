import {
  Globe,
  Code2,
  Users,
  LayoutDashboard,
  Plug,
  BrainCircuit,
  MessageSquare,
  Search,
  Palette,
  Wrench,
  Rocket,
  RefreshCw,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface TrustMetric {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  icon: typeof Globe;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  featured: boolean;
  image?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface ProcessStep {
  step: number;
  icon: typeof Search;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ─── Personal Info ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Ziko Rizqillah Akbar",
  firstName: "Ziko",
  role: "Full-Stack Developer",
  tagline: "Building modern web solutions for businesses.",
  supportingLine:
    "I help PT, CV, and individual businesses turn ideas into fast, clean, and useful digital products.",
  email: "zikorizqillah@gmail.com",
  whatsapp: "+6281234567890", // Replace with real number
  linkedin: "https://linkedin.com/in/zikorizqillah", // Replace with real URL
  github: "https://github.com/zikorizqillah", // Replace with real URL
  location: "Indonesia",
};

// ─── Trust Metrics ───────────────────────────────────────────────────────────

export const trustMetrics: TrustMetric[] = [
  { value: 2, suffix: "+", label: "Projects Delivered" },
  { value: 1, suffix: "", label: "System Still in Active Use" },
  { value: 100, suffix: "%", label: "Client-Focused Approach" },
  { value: 1, suffix: "", label: "End-to-End Development" },
];

// ─── About ───────────────────────────────────────────────────────────────────

export const aboutText = `I am a full-stack developer focused on building reliable, business-oriented web applications. I pay close attention to client requirements, translate them into clear technical solutions, and deliver clean systems that are useful in real business operations.`;

export const aboutHighlights = [
  "Deep understanding of business requirements before writing code",
  "Clean, maintainable code built for long-term use",
  "Full-stack capability from database to deployment",
  "Systems designed for real operational impact",
];

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional, responsive websites designed to represent your business online and attract new clients.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Tailored web apps built to solve specific business problems, from internal tools to customer-facing platforms.",
  },
  {
    icon: Users,
    title: "HR & Recruitment Systems",
    description:
      "Digital solutions for candidate assessment, tracking, and HR workflow automation.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Admin Panels",
    description:
      "Intuitive admin interfaces and data dashboards to help you monitor and manage operations.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Seamless integration of third-party services, payment gateways, and external data sources.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Workflow Systems",
    description:
      "Intelligent systems that leverage AI to automate analysis, assessment, and decision-making processes.",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "ai-assessment",
    title: "AI-Based Candidate Assessment System",
    summary:
      "A web application that automatically analyzes MBTI, DISC, and academic potential tests to help HR teams understand candidates better and improve recruitment decisions.",
    problem:
      "HR teams struggled with manual candidate evaluation—personality and aptitude assessments were time-consuming, subjective, and inconsistent across interviewers.",
    solution:
      "Built a full-stack web application that automates MBTI, DISC, and academic potential testing. The system generates AI-driven analysis reports, providing HR teams with structured, data-backed insights into each candidate's personality traits and cognitive abilities.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "AI/ML Integration",
      "REST API",
    ],
    impact:
      "The system is still actively used by the client today—enabling faster, more consistent candidate evaluations and significantly reducing the manual workload for HR teams.",
    featured: true,
    liveUrl: undefined,
    caseStudyUrl: undefined,
  },
  {
    id: "project-placeholder",
    title: "Business Management Platform",
    summary:
      "A comprehensive platform for managing business operations, client relationships, and project tracking in one unified interface.",
    problem:
      "Small to medium businesses often rely on scattered tools and spreadsheets to manage daily operations, leading to inefficiency and data silos.",
    solution:
      "Developed an integrated management platform with modules for client management, project tracking, invoicing, and reporting—bringing all essential business operations into a single, clean interface.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    impact:
      "Streamlined daily operations and improved data accessibility for the business team. (Details available upon request)",
    featured: false,
    liveUrl: undefined,
    caseStudyUrl: undefined,
    // NOTE: Replace this placeholder with a real project when ready
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Understand Business Needs",
    description:
      "I start by listening—understanding your goals, audience, and specific challenges before proposing any solution.",
  },
  {
    step: 2,
    icon: Search,
    title: "Plan the Solution",
    description:
      "Map out the technical architecture, features, and timeline based on your requirements and budget.",
  },
  {
    step: 3,
    icon: Palette,
    title: "Design the UI",
    description:
      "Create clean, intuitive interfaces that reflect your brand and provide an excellent user experience.",
  },
  {
    step: 4,
    icon: Wrench,
    title: "Build & Test",
    description:
      "Develop the application with clean code, then rigorously test every feature before delivery.",
  },
  {
    step: 5,
    icon: Rocket,
    title: "Deploy & Improve",
    description:
      "Launch your product and provide ongoing support, updates, and optimizations as your business grows.",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express / Fastify", level: 80 },
      { name: "REST API Design", level: 85 },
      { name: "Authentication", level: 80 },
      { name: "PostgreSQL / MongoDB", level: 80 },
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git & Version Control", level: 85 },
      { name: "Performance Optimization", level: 75 },
      { name: "AI Workflow Integration", level: 70 },
      { name: "CI/CD & Deployment", level: 75 },
      { name: "UI/UX Implementation", level: 80 },
    ],
  },
];

// ─── Why Work With Me (Testimonials replacement) ─────────────────────────────

export const valuePropositions = [
  {
    title: "Business-First Thinking",
    description:
      "I don't just write code—I understand why you need it and make sure the solution serves your actual business goals.",
    icon: MessageSquare,
  },
  {
    title: "Clean, Lasting Code",
    description:
      "Every project is built with maintainability in mind. Your system should work reliably for years, not just for demo day.",
    icon: Code2,
  },
  {
    title: "End-to-End Delivery",
    description:
      "From understanding your requirements to deploying the final product, I handle the full development lifecycle.",
    icon: RefreshCw,
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines, and honest feedback throughout the project. No surprises.",
    icon: Users,
  },
];
