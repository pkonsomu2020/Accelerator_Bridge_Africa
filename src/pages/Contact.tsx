import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-teal-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Get in <span className="gradient-text-hero">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about The Accelerator Bridge? We're here to help you on your journey to becoming a market-ready professional.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 inline-block">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Email</h3>
              <a href="mailto:community@secretstartups.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                community@secretstartups.org
              </a>
            </Card>

            <Card className="p-6 bg-card hover:shadow-lg transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-secondary/10 inline-block">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Phone</h3>
              <a href="tel:+254111566445" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +254 111 566445
              </a>
            </Card>

            <Card className="p-6 bg-card hover:shadow-lg transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-accent/10 inline-block">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">WhatsApp</h3>
              <a 
                href="https://chat.whatsapp.com/FxUhsJiEOiB8FHTIIKhfGG?mode=ems_copy_t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Join Community
              </a>
            </Card>

            <Card className="p-6 bg-card hover:shadow-lg transition-shadow border-border text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 inline-block">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">
                Nairobi, Kenya
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-card border-border">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black mb-4 text-foreground">
                  Send Us a <span className="gradient-text-hero">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold mb-2 text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-button text-white rounded-full font-semibold py-6 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6 text-foreground">
            Join Our <span className="gradient-text-hero">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Connect with fellow participants, mentors, and industry professionals. 
            Stay updated on program announcements, events, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-button text-white px-8 rounded-full font-semibold"
              onClick={() => window.open("https://chat.whatsapp.com/FxUhsJiEOiB8FHTIIKhfGG?mode=ems_copy_t", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/40 px-8 rounded-full hover:bg-primary/5 font-semibold"
              onClick={() => window.location.href = "mailto:community@secretstartups.org"}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
