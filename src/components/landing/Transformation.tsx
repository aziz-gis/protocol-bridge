import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const IMG = "https://i.ibb.co/4ZhV9qDk/9.jpg";

const before = [
  "إصلاحات يدوية لا تنتهي",
  "طوبولوجي مكسور ومتقطع",
  "رفض متكرر من الاستشاريين",
  "ضغط تسليم وقلق دائم",
  "Workflows عشوائية بلا منهجية",
];
const after = [
  "Workflows على معايير المؤسسات",
  "أنظمة GIS متصلة ومتماسكة",
  "طوبولوجي نظيف وقابل للتحقّق",
  "تسليم بثقة كاملة",
  "حضور مهني عالي السلطة",
];

export function Transformation() {
  return (
    <Section id="transform">
      <SectionHeader
        eyebrow="The Shift"
        title={<span className="rtl block">قبل The Protocol وبعده</span>}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mb-12 rounded-2xl overflow-hidden glass p-2 max-w-4xl mx-auto"
      >
        <img src={IMG} loading="lazy" alt="Transformation" className="w-full rounded-xl" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rtl text-right rounded-2xl p-7 border border-destructive/30 bg-destructive/5"
        >
          <div className="text-xs font-bold tracking-widest text-destructive mb-3">BEFORE</div>
          <h3 className="font-arabic text-2xl font-bold mb-5">قبل البروتوكول</h3>
          <ul className="space-y-3">
            {before.map((b) => (
              <li key={b} className="flex gap-3 items-start font-arabic text-muted-foreground">
                <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rtl text-right rounded-2xl p-7 border border-neon/40 bg-neon/5 glow-neon"
        >
          <div className="text-xs font-bold tracking-widest text-neon mb-3">AFTER</div>
          <h3 className="font-arabic text-2xl font-bold mb-5">بعد البروتوكول</h3>
          <ul className="space-y-3">
            {after.map((b) => (
              <li key={b} className="flex gap-3 items-start font-arabic">
                <Check className="w-5 h-5 text-neon shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
