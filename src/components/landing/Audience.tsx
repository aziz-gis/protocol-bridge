import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Lock } from "lucide-react";

const IMG = "https://i.ibb.co/RGwjFbKw/13.jpg";

const audience = [
  "GIS Engineers",
  "Infrastructure Teams",
  "Utility Network Specialists",
  "CAD / GIS Freelancers",
  "Technical Offices",
  "Engineering Consultants",
  "Project Managers",
];

export function Audience() {
  return (
    <Section id="audience">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-neon/10 blur-3xl rounded-3xl" />
          <div className="relative glass rounded-2xl p-2">
            <img src={IMG} loading="lazy" alt="Professionals" className="w-full rounded-xl" />
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 rtl text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/30 text-xs text-neon font-medium mb-4">
            <Lock className="w-3 h-3" />
            For Serious Professionals Only
          </div>
          <h2 className="font-arabic text-3xl md:text-5xl font-bold mb-5">
            مُصمَّم لمحترفي الـ GIS الجادّين
          </h2>
          <p className="font-arabic text-muted-foreground text-lg mb-8 leading-relaxed">
            هذا النظام ليس للمبتدئين. هو للمهندسين الذين يتعاملون مع مشاريع حقيقية، تسليمات
            استشارية، وضغط تشغيلي يومي. إذا كنت من هؤلاء — فالبروتوكول صُمّم لك.
          </p>
          <div className="flex flex-wrap gap-2 justify-end">
            {audience.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-4 py-2 rounded-lg glass text-sm font-arabic"
              >
                {a}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
