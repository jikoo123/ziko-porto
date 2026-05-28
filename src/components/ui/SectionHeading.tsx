import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </ScrollReveal>
  );
}
