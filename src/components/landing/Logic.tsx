import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const IMG = "https://i.ibb.co/JWRxbnL7/6.jpg";

const steps = [
  { n: "01", t: "CAD Cleansing", d: "تنقية شاملة لملفات الـ CAD وإزالة كل ما لا ينتمي للبنية النهائية." },
  { n: "02", t: "Layer Classification", d: "تصنيف هندسي للطبقات وفق منطق الـ GIS المؤسسي." },
  { n: "03", t: "Schema Design", d: "تصميم سكيمات قاعدة بيانات قابلة للتوسع والصيانة." },
  { n: "04", t: "Attribute Mapping", d: "ربط دقيق للسمات بمعايير شبكات الخدمات والبنية التحتية." },
  { n: "05", t: "QA / QC", d: "تحقّق منهجي من سلامة البيانات والطوبولوجي قبل التسليم." },
  { n: "06", t: "Enterprise Delivery", d: "تسليم نهائي بمعايير الاستشاريين الكبار وبيئات الـ Enterprise." },
];

export function Logic() {
  return (
    <Section id="logic" className="bg-card/30">
      <SectionHeader
        eyebrow="The Logic"
        title={<span className="rtl block">من فوضى الـ CAD إلى ذكاء الـ GIS</span>}
        subtitle={<span className="rtl block">نظام تشغيلي متكامل، مرتب كأنه خط إنتاج هندسي.</span>}
      />

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 lg:sticky lg:top-24"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-neon/10 blur-3xl rounded-3xl" />
            <div className="relative glass rounded-2xl p-2">
              <img src={IMG} loading="lazy" alt="Workflow" className="w-full rounded-xl" />
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-3 relative">
          <div className="absolute right-6 top-2 bottom-2 w-px bg-gradient-to-b from-neon/60 via-neon/20 to-transparent rtl:right-auto rtl:left-6" />
          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rtl flex gap-5 items-start glass glass-hover rounded-xl p-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-neon/15 border border-neon/40 flex items-center justify-center text-neon font-bold font-display">
                  {s.n}
                </div>
                <div className="text-right flex-1">
                  <h4 className="font-arabic font-bold text-lg mb-1">{s.t}</h4>
                  <p className="font-arabic text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
