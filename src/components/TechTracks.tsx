import { Card } from "@/components/ui/card";
import { Server, Cloud, Database, Brain } from "lucide-react";

const tracks = [
  {
    title: "Software Engineering",
    icon: Server,
    description: "Backend, Frontend, Mobile development, Machine learning and Artificial Intelligence(AI).",
    gradient: "from-blue-100 to-blue-50",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
  },
  {
    title: "Cloud Engineering",
    icon: Cloud,
    description: "Cloud infrastructure, DevOps, CI/CD pipelines, and deployment strategies.",
    gradient: "from-purple-100 to-purple-50",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
  },
  {
    title: "Data Engineering",
    icon: Database,
    description: "Data pipelines, ETL processes, database design, Data Science, Data Analytics and infrastructure.",
    gradient: "from-teal-100 to-teal-50",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    title: "Machine Learning",
    icon: Brain,
    description: "ML models, AI integration, model deployment, and real-world AI applications.",
    gradient: "from-pink-100 to-pink-50",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
  },
];

export const TechTracks = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950/30 dark:to-blue-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Four <span className="gradient-text-hero">Tech Tracks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your specialization and work with cross-functional teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <Card
                key={track.title}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{track.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{track.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
