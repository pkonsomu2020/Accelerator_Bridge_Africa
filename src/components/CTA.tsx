import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetTickets = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const pricingSection = document.getElementById("pricing");
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-12 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-xl border border-border">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              Ready to <span className="gradient-text-hero">Accelerate</span> Your Career?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the next cohort and transform from learner to market-ready professional
              in just 5 weeks. Limited spots available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gradient-button px-10 py-6 text-base rounded-full group font-semibold shadow-lg"
                onClick={handleGetTickets}
              >
                Get Tickets
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/40 px-10 py-6 text-base rounded-full hover:bg-primary/5 font-semibold"
                onClick={handleContactUs}
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
