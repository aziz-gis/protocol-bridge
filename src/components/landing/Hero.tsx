import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Zap } from "lucide-react";

const HERO_IMG = "https://i.ibb.co/TMBnXp5v/The-Protocol-Enterprise-CAD-GIS-Transformation-Suite.jpg";
const CONTACT_URL = "https://azizgeoverse.nzmly.com/l/NThfXhhhnn/contact";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--neon)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rtl text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-neon font-medium mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Enterprise CAD → GIS Transformation System
          </div>

          <h1 className="font-arabic text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            توقّف عن دفع ثمن
            <span className="text-neon text-glow"> رفض الاستشاريين</span>
            <br />
            وفوضى الـ CAD المتراكمة
          </h1>

          <p className="font-arabic text-lg text-muted-foreground mb-8 leading-relaxed">
            <span className="text-foreground font-semibold">The Protocol</span> هو نظام حماية مؤسسي
            لمخرجاتك في الـ GIS — يحوّل ملفات الـ CAD العشوائية إلى بيئة بيانات نظيفة،
            متماسكة طوبولوجياً، وجاهزة لأعلى معايير التسليم الاحترافية.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <motion.a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="pulse-cta inline-flex items-center justify-center gap-2 bg-neon text-primary-foreground font-bold font-arabic px-7 py-4 rounded-xl text-base"
            >
              <Zap className="w-5 h-5" />
              امتلك الـ Executive Assets الآن
            </motion.a>
            <motion.a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center gap-2 glass glass-hover font-arabic font-semibold px-7 py-4 rounded-xl text-base"
            >
              أمّن مشاريعك عبر البروتوكول
              <ArrowLeft className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-end text-sm text-muted-foreground">
            {["ArcGIS Pro Ready", "Enterprise Schema", "Topology Validated"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon glow-neon" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-neon/20 blur-3xl rounded-3xl" />
          <div className="relative rounded-2xl overflow-hidden glass p-2">
            <img
              src={HERO_IMG}
              alt="The Protocol — Enterprise CAD to GIS Transformation Suite"
              loading="eager"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
