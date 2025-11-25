import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleGetTickets = () => {
    navigate("/");
    setTimeout(() => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About <span className="gradient-text-hero">The Accelerator Bridge</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Bridging the gap between learning and market readiness through 
            intensive training, mentorship, and real-world experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 text-foreground">
              Our <span className="gradient-text-hero">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To accelerate young tech professionals from learning to market through mentorship, 
              skilled training, and real-world project experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that the gap between academic learning and industry readiness can be 
              bridged through a structured, intensive program that combines technical excellence 
              with essential soft skills.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Our <span className="gradient-text-hero">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 inline-block">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We strive for the highest standards in training, mentorship, and outcomes.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-secondary/10 inline-block">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Community</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building a supportive network where everyone grows together.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-accent/10 inline-block">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Embracing new approaches to solve real-world challenges.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 inline-block">
                <Users2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Collaboration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cross-functional teamwork that mirrors industry reality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
              alt="Partnership"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black mb-6 text-foreground">
              A <span className="gradient-text-hero">Partnership</span> for Success
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Accelerator Bridge is a collaboration between SkillME and SecretStartups, combining 
              expertise in technical training and startup ecosystem development.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Together, we've created a comprehensive program that prepares participants 
              for multiple career paths: freelancing, employment, or entrepreneurship.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <div className="text-3xl font-black gradient-text-hero mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Expert Mentors</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-teal-50 p-6 rounded-xl">
                <div className="text-3xl font-black gradient-text-hero mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              The <span className="gradient-text-hero">Accelerator Bridge</span> Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes our program unique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-border">
              <div className="text-5xl font-black gradient-text-hero mb-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Comprehensive</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just teach technical skills. We develop the complete professional 
                package including soft skills, collaboration, and career readiness.
              </p>
            </Card>

            <Card className="p-8 bg-white border-border">
              <div className="text-5xl font-black gradient-text-hero mb-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Practical</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every phase includes hands-on projects and real-world challenges. 
                You'll build an actual MVP that demonstrates your capabilities.
              </p>
            </Card>

            <Card className="p-8 bg-white border-border">
              <div className="text-5xl font-black gradient-text-hero mb-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Connected</h3>
              <p className="text-muted-foreground leading-relaxed">
                Direct access to recruiters, founders, and industry professionals 
                who can help launch your career.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to <span className="gradient-text-hero">Transform</span> Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the next cohort and become part of The Accelerator Bridge community.
          </p>
          <button 
            onClick={handleGetTickets}
            className="gradient-button px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Tickets
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
