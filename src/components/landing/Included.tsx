import { motion } from "framer-motion";
import { FileText, Layers, Compass, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const IMG = "https://i.ibb.co/zTjvgVRJ/7.jpg";

const assets = [
  {
    icon: FileText,
    title: "The Protocol",
    desc: "النظام التشغيلي الكامل لتحويل الـ CAD إلى بيئة GIS مؤسسية موثّقة بالكامل.",
  },
  {
    icon: Compass,
    title: "The Migration Command Sheet",
    desc: "ورقة قيادة تنفيذية تُدار بها كل خطوة من خطوات التحويل بدقة هندسية.",
  },
  {
    icon: Layers,
    title: "GIS Architecture Blueprint",
    desc: "مخطط معماري كامل لبناء قاعدة البيانات المكانية على معايير المؤسسات الكبرى.",
  },
  {
    icon: ShieldCheck,
    title: "The Spatial Integrity Protocol",
    desc: "نظام صارم لضمان سلامة الطوبولوجي وجاهزية البيانات للتسليم النهائي.",
  },
];

export function Included() {
  return (
    <Section id="included">
      <SectionHeader
        eyebrow="What's Inside"
        title={<span className="rtl block">ماذا يوجد داخل The Protocol</span>}
        subtitle={<span className="rtl block">أربع أصول تنفيذية تُعيد تعريف طريقة عملك في GIS.</span>}
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-neon/10 blur-3xl rounded-3xl" />
          <div className="relative glass rounded-2xl p-2">
            <img src={IMG} loading="lazy" alt="What's included" className="w-full rounded-xl" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {assets.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-6 rtl text-right"
            >
              <div className="w-11 h-11 rounded-lg bg-neon/15 flex items-center justify-center mb-4 border border-neon/30">
                <a.icon className="w-5 h-5 text-neon" />
              </div>
              <h3 className="font-arabic font-bold text-lg mb-2">{a.title}</h3>
              <p className="font-arabic text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
