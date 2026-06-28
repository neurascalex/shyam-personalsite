import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Ecosystem } from "@/components/Ecosystem";
import { Work } from "@/components/Work";
import { Proof } from "@/components/Proof";
import { Advisory } from "@/components/Advisory";
import { ImpactShow } from "@/components/ImpactShow";
import { NeuraScaleX } from "@/components/NeuraScaleX";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg selection:bg-gold selection:text-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Work />
        <Proof />
        <Advisory />
        <ImpactShow />
        <NeuraScaleX />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
