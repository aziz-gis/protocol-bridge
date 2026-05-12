import { motion } from "framer-motion";

const LOGO = "https://i.ibb.co/FL1qFNK0/smbgr.png";
const CONTACT_URL = "https://azizgeoverse.nzmly.com/l/NThfXhhhnn/contact";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="The Protocol" className="w-9 h-9 rounded-md" />
          <div className="font-display font-bold tracking-tight">
            The <span className="text-neon">Protocol</span>
          </div>
        </div>
        <a
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center bg-neon text-primary-foreground font-bold font-arabic px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition"
        >
          امتلك الآن
        </a>
      </div>
    </motion.header>
  );
}
