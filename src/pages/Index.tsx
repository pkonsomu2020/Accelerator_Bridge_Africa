import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { TechTracks } from "@/components/TechTracks";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="journey">
        <Journey />
      </section>
      <section id="tracks">
        <TechTracks />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <Partners />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
