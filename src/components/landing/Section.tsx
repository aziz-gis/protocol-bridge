import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-6 relative">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-14"
    >
      {eyebrow && (
        <div className="inline-block text-xs font-semibold tracking-[0.2em] text-neon uppercase mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="font-arabic text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="font-arabic text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
