import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Database, GitBranch, ShieldCheck, Network, Activity } from "lucide-react";

const IMG1 = "https://i.ibb.co/r2HPMnCD/11.jpg";
const IMG2 = "https://i.ibb.co/ds4Dd691/12.jpg";

const items = [
  { icon: ShieldCheck, t: "QA / QC Systems", d: "أنظمة فحص متعددة الطبقات لكل مخرج قبل التسليم." },
  { icon: Network, t: "Topology Validation", d: "تحقّق صارم من اتصال الشبكات وسلامتها الهندسية." },
  { icon: Activity, t: "Spatial Integrity", d: "حماية كاملة لجودة البيانات المكانية في كل مرحلة." },
  { icon: Database, t: "Enterprise Schema", d: "بنية بيانات مصمّمة لمشاريع البنية التحتية الكبرى." },
  { icon: GitBranch, t: "GIS Governance", d: "حوكمة احترافية تدير دورة حياة البيانات بالكامل." },
];

export function Reliability() {
  return (
    <Section id="reliability" className="bg-card/30">
      <SectionHeader
        eyebrow="Built for Enterprise"
        title={<span className="rtl block">مبني على معايير الـ Enterprise GIS</span>}
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        {[IMG1, IMG2].map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative glass rounded-2xl p-2"
          >
            <img src={src} loading="lazy" alt="Standards" className="w-full rounded-xl" />
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass glass-hover rounded-xl p-5 rtl text-right"
          >
            <it.icon className="w-6 h-6 text-neon mb-3" />
            <h4 className="font-arabic font-bold mb-1.5">{it.t}</h4>
            <p className="font-arabic text-sm text-muted-foreground">{it.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
