import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Rocket, Users, Code, Trophy, Briefcase, CheckCircle } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Kick-Off Session",
    icon: Rocket,
    description: "Pre-event information session to clarify event structure, answer questions, and facilitate cross-functional team formation.",
    duration: "1 Day",
    highlights: [
      "Program overview and expectations",
      "Team formation across 4 tech tracks",
      "Meet mentors and fellow participants",
      "Set up tools and platforms"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
  },
  {
    number: "02",
    title: "Soft Skills Foundation",
    icon: Users,
    description: "Expert mentors coach on essential professional skills: problem-solving, communication, collaboration, presentation, and personal branding.",
    duration: "3 Weeks",
    highlights: [
      "Problem definition and solution design",
      "Team collaboration techniques",
      "Storytelling and pitching skills",
      "Personal and team branding"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    number: "03",
    title: "Technical Deep-Dive",
    icon: Code,
    description: "Technical mentors deliver workshops across 4 tracks (SE, Cloud, Data, ML), emphasizing industry best practices and standards.",
    duration: "1 Week",
    highlights: [
      "Track-specific technical training",
      "Real-world problem solving",
      "Industry best practices",
      "Hands-on workshops with 10+ mentors"
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  },
  {
    number: "04",
    title: "Hackathon Challenge",
    icon: Trophy,
    description: "Build a functional MVP that demonstrates cross-functional capabilities and ability to apply both technical and professional skills.",
    duration: "1 Week",
    highlights: [
      "Build real-world AI solutions",
      "Cross-functional team collaboration",
      "Mentor guidance and support",
      "Multiple prize categories"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
  },
  {
    number: "05",
    title: "Career Launch",
    icon: Briefcase,
    description: "Engage with hiring professionals who share what recruiters look for and provide clarity on technical interview expectations.",
    duration: "2 Days",
    highlights: [
      "Resume and LinkedIn optimization",
      "Interview preparation",
      "Recruiter insights",
      "Founder mindset training"
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
  },
];

const Program = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Your <span className="gradient-text-hero">5-Week Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Each phase builds on the previous one, developing you into a skilled professional 
            ready for freelancing, employment, or startup founding.
          </p>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={phase.number} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={phase.image} 
                      alt={phase.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-bold text-primary">{phase.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-black text-primary/20">
                      {phase.number}
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-black mb-4 text-foreground">{phase.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="space-y-3">
                    {phase.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Program;
