import { motion } from "framer-motion";
import { Clock, ShieldAlert, Award, Sparkles, Zap, TrendingDown, Trophy } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const IMG = "https://i.ibb.co/GQsLGzyf/14.jpg";

const benefits = [
  { icon: Clock, t: "وقت تسليم أقصر", d: "اختصر ساعات التحضير اليدوي وأنجز الـ Deliverables في زمن قياسي." },
  { icon: ShieldAlert, t: "أخطاء GIS أقل", d: "نظام يمنع الخطأ من جذره قبل أن يصل إلى الاستشاري." },
  { icon: Award, t: "حماية سمعتك المهنية", d: "أوقف دورة الرفض وابنِ صورة المهندس الذي يُعتمد عليه." },
  { icon: Sparkles, t: "بيانات أنظف", d: "بيئة GIS مرتبة، موثّقة، وقابلة للتدقيق في أي وقت." },
  { icon: Zap, t: "Workflows أسرع", d: "خطوات محسوبة بدلاً من عشوائية تستهلك يومك." },
  { icon: TrendingDown, t: "Reject Risk أقل", d: "قلّل احتمالية رفض المشروع إلى أدنى مستوى ممكن." },
  { icon: Trophy, t: "ثقة احترافية أعلى", d: "تعامل مع كل مشروع بثقة المهندس صاحب النظام." },
];

export function Benefits() {
  return (
    <Section id="benefits" className="bg-card/30">
      <SectionHeader
        eyebrow="The Real Gain"
        title={<span className="rtl block">ما الذي ستحصل عليه فعلياً</span>}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto mb-12 glass rounded-2xl p-2"
      >
        <img src={IMG} loading="lazy" alt="Benefits" className="w-full rounded-xl" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rtl text-right glass glass-hover rounded-2xl p-7"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon/20 to-neon/5 border border-neon/30 flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-neon" />
            </div>
            <h3 className="font-arabic font-bold text-xl mb-2">{b.t}</h3>
            <p className="font-arabic text-muted-foreground leading-relaxed">{b.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
