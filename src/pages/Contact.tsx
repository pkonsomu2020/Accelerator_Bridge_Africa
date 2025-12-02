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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://accelerator-bridge-api.onrender.com/api';
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.'
        });
        setFormData({ name: "", email: "", description: "" });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <h3 className="text-lg font-bold mb-3 text-foreground">WhatsApp Communities</h3>
              <div className="space-y-2">
                <Button
                  size="sm"
                  className="w-full gradient-button text-white rounded-full font-semibold"
                  onClick={() => window.open("https://chat.whatsapp.com/Go1a5m0MwSq0HiOYDGVnf7?mode=hqrt2", "_blank")}
                >
                  Secretstartups
                </Button>
                <Button
                  size="sm"
                  className="w-full gradient-button text-white rounded-full font-semibold"
                  onClick={() => window.open("https://chat.whatsapp.com/FxUhsJiEOiB8FHTIIKhfGG?mode=ems_copy_t", "_blank")}
                >
                  Skillyme
                </Button>
              </div>
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

              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

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
                  disabled={isSubmitting}
                  className="w-full gradient-button text-white rounded-full font-semibold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
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
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="gradient-button text-white px-8 rounded-full font-semibold"
                onClick={() => window.open("https://chat.whatsapp.com/Go1a5m0MwSq0HiOYDGVnf7?mode=hqrt2", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Secretstartups Community
              </Button>
              <Button
                size="lg"
                className="gradient-button text-white px-8 rounded-full font-semibold"
                onClick={() => window.open("https://chat.whatsapp.com/FxUhsJiEOiB8FHTIIKhfGG?mode=ems_copy_t", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Skillyme Community
              </Button>
            </div>
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
