import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const CONTACT_URL = "https://azizgeoverse.nzmly.com/l/NThfXhhhnn/contact";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-neon/15 blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center rtl"
        >
          <h2 className="font-arabic text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            إمّا أن تستمر في
            <span className="text-destructive"> إصلاح الأخطاء</span>...
            <br />
            أو تبني نظاماً
            <span className="text-neon text-glow"> يمنعها من البداية</span>.
          </h2>
          <p className="font-arabic text-lg text-muted-foreground mb-10">
            القرار في يدك. والبروتوكول جاهز للحظة التي تختار فيها الانتقال إلى البيئة المؤسسية.
          </p>
          <motion.a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="pulse-cta inline-flex items-center justify-center gap-3 bg-neon text-primary-foreground font-bold font-arabic px-9 py-5 rounded-xl text-lg"
          >
            ابدأ بناء بيئة GIS احترافية الآن
            <ArrowLeft className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
