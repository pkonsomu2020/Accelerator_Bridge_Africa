import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Sparkles } from "lucide-react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    alt: "Team collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    alt: "Tech professionals working"
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    alt: "Team meeting"
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    alt: "Coding workspace"
  }
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-20 pt-32 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-teal-950/30">
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="text-left">
          {/* Event Info Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-card border border-primary/20 mb-6 animate-fade-in-up shadow-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">5-Week Intensive Program</span>
            <span className="text-muted-foreground">|</span>
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Virtual & Hybrid</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text-hero block">
              The Accelerator
            </span>
            <span className="text-foreground block mt-2">
              Bridge
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Transform from Learner to Market-Ready Professional
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Join industry leaders, engineers, and visionaries in a comprehensive program combining mentorship, 
            hands-on training, and real-world projects to accelerate your tech career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="gradient-button px-8 py-6 text-base rounded-full font-semibold group shadow-lg">
              Join the Program
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/40 px-8 py-6 text-base rounded-full hover:bg-primary/5 font-semibold">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black gradient-text-hero">5</div>
              <div className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wide">Weeks</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black gradient-text-hero">4</div>
              <div className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wide">Tech Tracks</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black gradient-text-hero">10+</div>
              <div className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wide">Mentors</div>
            </div>
          </div>
        </div>

        {/* Right Image Carousel */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Image Slider */}
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentImageIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Animated Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-8 h-8 text-primary opacity-75" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black gradient-text-hero animate-count-up">100+</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
