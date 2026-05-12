import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const faqs = [
  {
    q: "هل المحتوى مناسب لمشاريع البنية التحتية الحقيقية؟",
    a: "نعم، البروتوكول مبني بالكامل على متطلبات مشاريع البنية التحتية الفعلية، من شبكات المياه والصرف إلى الكهرباء والاتصالات.",
  },
  {
    q: "هل البروتوكول عملي أم نظري؟",
    a: "تطبيقي 100%. كل خطوة قابلة للتنفيذ مباشرة على ملفاتك الحقيقية، بدون أي حشو نظري.",
  },
  {
    q: "هل يمكن تطبيقه على شبكات المياه والـ Stormwater؟",
    a: "نعم، صُمّم خصيصاً لشبكات الخدمات بأنواعها المختلفة، وبضمنها المياه والصرف الصحي والـ Stormwater.",
  },
  {
    q: "هل الشرح مناسب لمستخدمي ArcGIS Pro؟",
    a: "البروتوكول مبني على أحدث منهجيات ArcGIS Pro و Enterprise Geodatabase.",
  },
  {
    q: "هل سأحتاج خبرة متقدمة؟",
    a: "تحتاج إلى مستوى مهني، لكن البروتوكول نفسه يرتقي بمستواك إلى البيئة المؤسسية.",
  },
  {
    q: "هل يمكن تطبيق الـ Workflow على أكثر من نوع شبكة؟",
    a: "نعم، الـ Workflow معياري ويمكن تطبيقه على كل أنواع الشبكات الهندسية.",
  },
  {
    q: "هل المعايير المستخدمة Enterprise-Level؟",
    a: "بالضبط. كل معيار مأخوذ من بيئات الاستشاريين الكبار وأنظمة الـ Enterprise GIS العالمية.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title={<span className="rtl block">إجابات على ما يدور في ذهنك</span>}
      />
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`glass rounded-xl overflow-hidden transition-all ${isOpen ? "border-neon/50" : ""}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 rtl text-right"
              >
                <span className="font-arabic font-semibold flex-1">{f.q}</span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-neon shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 font-arabic text-muted-foreground rtl text-right leading-relaxed">
                  {f.a}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
