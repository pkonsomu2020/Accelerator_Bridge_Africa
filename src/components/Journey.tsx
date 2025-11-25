import { Card } from "@/components/ui/card";
import { Rocket, Users, Code, Trophy, Briefcase } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Kick-Off",
    icon: Rocket,
    description: "Pre-event information session to clarify event structure, answer questions, and facilitate cross-functional team formation.",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
  },
  {
    number: "02",
    title: "Soft Skills",
    icon: Users,
    description: "Expert mentors coach on essential professional skills: problem-solving, communication, collaboration, presentation, and personal branding.",
    color: "text-accent",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    number: "03",
    title: "Technical Deep-Dive",
    icon: Code,
    description: "Technical mentors deliver workshops across 4 tracks (SE, Cloud, Data, ML), emphasizing industry best practices and standards.",
    color: "text-secondary",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
  },
  {
    number: "04",
    title: "Hackathon",
    icon: Trophy,
    description: "Build a functional MVP that demonstrates cross-functional capabilities and ability to apply both technical and professional skills.",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
  },
  {
    number: "05",
    title: "Career Launch",
    icon: Briefcase,
    description: "Engage with hiring professionals who share what recruiters look for and provide clarity on technical interview expectations.",
    color: "text-secondary",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop"
  },
];

export const Journey = () => {
  return (
    <section className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Your 5-Week <span className="gradient-text-hero">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each phase compounds on the previous one, developing you into a skilled freelancer,
            job-ready professional, or viable startup founder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card
                key={phase.number}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-5xl font-black text-white/30">
                    {phase.number}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                    <Icon className={`w-6 h-6 ${phase.color}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{phase.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
