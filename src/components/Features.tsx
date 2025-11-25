import { Card } from "@/components/ui/card";
import { Users, Target, Zap, Award, BookOpen, Rocket } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from 10+ industry professionals with real-world experience",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
  },
  {
    icon: Target,
    title: "Cross-Functional Teams",
    description: "Collaborate with SE, Cloud, Data, and ML specialists",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  },
  {
    icon: Zap,
    title: "Hands-On Projects",
    description: "Build a real MVP that demonstrates your full capabilities",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Portfolio projects that employers actually value",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description: "Technical skills + soft skills for complete career readiness",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Direct path to freelancing, employment, or startup founding",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Why Choose <span className="gradient-text-hero">The Accelerator Bridge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform from learner to professional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
