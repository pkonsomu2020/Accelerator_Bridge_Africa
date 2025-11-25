import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { Server, Cloud, Database, Brain, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tracks = [
  {
    title: "Software Engineering",
    icon: Server,
    description: "Master full-stack development, system design, and best practices for building scalable applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    skills: [
      "Frontend Development (React, Vue, Angular)",
      "Backend Development (Node.js, Python, Java)",
      "API Design and Development",
      "System Architecture and Design Patterns",
      "Testing and Quality Assurance",
      "Version Control with Git"
    ],
    outcomes: [
      "Build production-ready web applications",
      "Design scalable system architectures",
      "Implement clean code practices",
      "Collaborate effectively in dev teams"
    ]
  },
  {
    title: "Cloud Engineering",
    icon: Cloud,
    description: "Learn cloud infrastructure, DevOps practices, CI/CD pipelines, and deployment strategies.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    skills: [
      "AWS/Azure/GCP Cloud Platforms",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Container Orchestration (Docker, Kubernetes)",
      "CI/CD Pipeline Implementation",
      "Monitoring and Logging",
      "Security Best Practices"
    ],
    outcomes: [
      "Deploy and manage cloud infrastructure",
      "Automate deployment processes",
      "Implement scalable architectures",
      "Ensure system reliability and security"
    ]
  },
  {
    title: "Data Engineering",
    icon: Database,
    description: "Build data pipelines, ETL processes, database design, and analytics infrastructure.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    skills: [
      "Data Pipeline Development",
      "ETL/ELT Processes",
      "SQL and NoSQL Databases",
      "Data Warehousing",
      "Big Data Technologies (Spark, Hadoop)",
      "Data Visualization and BI Tools"
    ],
    outcomes: [
      "Design efficient data architectures",
      "Build automated data pipelines",
      "Optimize database performance",
      "Create insightful data visualizations"
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    description: "Develop ML models, AI integration, model deployment, and real-world AI applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    skills: [
      "Machine Learning Algorithms",
      "Deep Learning and Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Model Training and Optimization",
      "ML Model Deployment (MLOps)"
    ],
    outcomes: [
      "Build and train ML models",
      "Deploy AI solutions to production",
      "Solve real-world problems with AI",
      "Implement responsible AI practices"
    ]
  },
];

const TechTracksPage = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Four <span className="gradient-text-hero">Tech Tracks</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose your specialization and work with cross-functional teams to build 
            real-world projects that showcase your expertise.
          </p>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={track.title} className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="sticky top-32">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={track.image} 
                        alt={track.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <h2 className="text-4xl font-black mb-4 text-foreground">{track.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {track.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">What You'll Learn</h3>
                    <div className="grid gap-3">
                      {track.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-muted/30 p-3 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Learning Outcomes</h3>
                    <div className="space-y-3">
                      {track.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to Choose Your <span className="gradient-text-hero">Track?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join cross-functional teams and build projects that span all four specializations.
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

export default TechTracksPage;
