import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Users, Ticket } from "lucide-react";

const pricingPackages = [
  {
    name: "Individual Pass",
    price: "2,000",
    currency: "KES",
    description: "Full access to the 5-week program",
    features: [
      "Complete 5-week program access",
      "All soft skills training",
      "Technical deep-dive workshops",
      "Hackathon participation",
      "Career launch sessions",
      "Certificate of completion"
    ],
    icon: Ticket,
    popular: true,
    badge: "Best Value"
  },
  {
    name: "Team Package",
    price: "8,500",
    currency: "KES",
    description: "Bring your team of 5 and save together",
    features: [
      "5 participants included",
      "Complete program access for all",
      "Team collaboration benefits",
      "Group networking opportunities",
      "Shared learning experience",
      "KES 1,200 per person",
      "Save KES 1,500 total"
    ],
    icon: Users,
    popular: false,
    badge: "Team Deal"
  },
  {
    name: "Live Event Only",
    price: "700",
    currency: "KES",
    description: "Attend the final live event",
    features: [
      "Access to live event day",
      "Networking opportunities",
      "Meet mentors and speakers",
      "Project showcase viewing",
      "Career fair access",
      "Event certificate"
    ],
    icon: Ticket,
    popular: false,
    badge: "Event Pass"
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950/30 dark:to-blue-950/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Choose Your <span className="gradient-text-hero">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the package that best fits your needs and start your journey to becoming a market-ready professional
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPackages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden bg-card border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? "border-primary shadow-xl scale-105" : "border-border"
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      pkg.popular 
                        ? "bg-primary text-white" 
                        : "bg-secondary text-white"
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4 p-3 rounded-xl bg-primary/10 inline-block">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{pkg.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-muted-foreground">{pkg.currency}</span>
                      <span className="text-4xl font-black gradient-text-hero">{pkg.price}</span>
                    </div>
                    {pkg.name === "Group of 5" && (
                      <p className="text-xs text-muted-foreground mt-1">Total for 5 participants</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className="w-full rounded-full font-semibold gradient-button text-white"
                  >
                    Get Tickets
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All packages include access to our community platform and networking opportunities
          </p>
          <p className="text-sm text-muted-foreground">
            Have questions? <a href="#contact" className="text-primary font-semibold hover:underline" onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}>Contact us</a> for more information
          </p>
        </div>
      </div>
    </section>
  );
};
