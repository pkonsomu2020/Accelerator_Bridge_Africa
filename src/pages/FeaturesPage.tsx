import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Zap, Award, BookOpen, Rocket, Video, MessageSquare, Code2, Trophy } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from 10+ industry professionals with real-world experience across all tech tracks.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
  },
  {
    icon: Target,
    title: "Cross-Functional Teams",
    description: "Collaborate with specialists from SE, Cloud, Data, and ML to build comprehensive solutions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  },
  {
    icon: Zap,
    title: "Hands-On Projects",
    description: "Build a real MVP that demonstrates your full capabilities and solves actual problems.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Create portfolio projects that employers actually value and showcase your skills.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description: "Master both technical skills and soft skills for complete career readiness.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Direct path to freelancing, employment, or startup founding with recruiter access.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
  },
];

const benefits = [
  {
    icon: Video,
    title: "Live Interactive Sessions",
    description: "Engage with mentors and peers in real-time workshops and Q&A sessions."
  },
  {
    icon: MessageSquare,
    title: "Community Support",
    description: "Join a vibrant WhatsApp community with dedicated channels for each tech track."
  },
  {
    icon: Code2,
    title: "Real-World Challenges",
    description: "Tackle actual industry problems and learn how professionals solve them."
  },
  {
    icon: Trophy,
    title: "Multiple Prize Categories",
    description: "Win awards for best collaboration, technical execution, and track-specific excellence."
  },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Why Choose <span className="gradient-text-hero">The Accelerator Bridge</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to transform from learner to market-ready professional 
            in just 5 weeks.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
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
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              More <span className="gradient-text-hero">Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Additional features that make The Accelerator Bridge stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="p-6 bg-white hover:shadow-lg transition-shadow border-border">
                  <div className="mb-4 p-3 rounded-xl bg-primary/10 inline-block">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              What You'll <span className="gradient-text-hero">Receive</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">During the Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-foreground">Access to 10+ expert mentors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-foreground">Live workshops and training sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-foreground">Collaborative team environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-foreground">Hands-on project experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-foreground">Community support network</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">After Completion</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span className="text-foreground">Certificate of completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span className="text-foreground">Portfolio-ready project</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span className="text-foreground">Direct recruiter connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span className="text-foreground">Alumni network access</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span className="text-foreground">Career guidance resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
