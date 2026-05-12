import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Included } from "@/components/landing/Included";
import { Logic } from "@/components/landing/Logic";
import { Transformation } from "@/components/landing/Transformation";
import { Reliability } from "@/components/landing/Reliability";
import { Audience } from "@/components/landing/Audience";
import { Benefits } from "@/components/landing/Benefits";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Floaters } from "@/components/landing/Floaters";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Protocol — Enterprise CAD → GIS Transformation System" },
      {
        name: "description",
        content:
          "نظام تنفيذي يحوّل ملفات الـ CAD العشوائية إلى بيئة GIS مؤسسية متماسكة، جاهزة لأعلى معايير التسليم الاحترافي.",
      },
      { property: "og:title", content: "The Protocol — Enterprise CAD → GIS" },
      {
        property: "og:description",
        content: "Executive system for serious GIS professionals.",
      },
      {
        property: "og:image",
        content:
          "https://i.ibb.co/TMBnXp5v/The-Protocol-Enterprise-CAD-GIS-Transformation-Suite.jpg",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Included />
      <Logic />
      <Transformation />
      <Reliability />
      <Audience />
      <Benefits />
      <FAQ />
      <FinalCTA />
      <footer className="py-10 border-t border-border/50 text-center text-sm text-muted-foreground font-arabic">
        © {new Date().getFullYear()} The Protocol — Enterprise CAD → GIS Transformation System
      </footer>
      <Floaters />
    </main>
  );
}
