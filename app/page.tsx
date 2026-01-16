import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesGrid from "@/components/ServicesGrid";
import PodcastSection from "@/components/PodcastSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark text-slate-100 selection:bg-primary selection:text-white">
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium tracking-wide font-display">
        <span className="mr-2">NUEVO TALLER:</span> Liderazgo Ontológico 2024.{" "}
        <a
          href="#"
          className="underline decoration-1 underline-offset-2 hover:text-white/80 transition-colors ml-1 inline-flex items-center"
        >
          Inscribirse ahora <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      <Navbar />
      <Hero />
      <SocialProof />
      <ServicesGrid />
      <PodcastSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
