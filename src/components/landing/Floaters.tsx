import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";

const PHONE = "201555146346";
const CONTACT_URL = "https://azizgeoverse.nzmly.com/l/NThfXhhhnn/contact";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("أريد معرفة طرق الدفع المحلية في مصر للبروتوكول")}`;

export function Floaters() {
  return (
    <>
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 bg-gradient-to-t from-background via-background/95 to-transparent">
        <a
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-cta flex items-center justify-center gap-2 bg-neon text-primary-foreground font-bold font-arabic w-full py-4 rounded-xl"
        >
          <Zap className="w-5 h-5" />
          امتلك The Protocol الآن
        </a>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="group fixed bottom-24 md:bottom-6 right-5 z-50"
      >
        <div className="absolute inset-0 bg-neon rounded-full blur-xl opacity-50 animate-pulse" />
        <div className="relative w-14 h-14 rounded-full bg-neon flex items-center justify-center glow-neon">
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 rounded-lg glass text-xs font-arabic whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          اسأل عن طرق الدفع المحلية في مصر
        </div>
      </motion.a>
    </>
  );
}
