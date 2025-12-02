import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eye, TrendingUp, Users, Rocket, Upload, Send } from "lucide-react";
import { useState } from "react";

const Partnerships = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPersonName: "",
    email: "",
    phoneNumber: "",
    organizationDescription: "",
    logo: null as File | null,
    partnershipDescription: "",
    additionalInfo: ""
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
      const formDataToSend = new FormData();
      formDataToSend.append('organizationName', formData.organizationName);
      formDataToSend.append('contactPersonName', formData.contactPersonName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('organizationDescription', formData.organizationDescription);
      formDataToSend.append('partnershipDescription', formData.partnershipDescription);
      formDataToSend.append('additionalInfo', formData.additionalInfo);
      
      if (formData.logo) {
        formDataToSend.append('logo', formData.logo);
      }

      const API_URL = import.meta.env.VITE_API_URL || 'https://accelerator-bridge-api.onrender.com/api';
      const response = await fetch(`${API_URL}/partnership`, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your partnership interest! We\'ll review your submission and get back to you within 2-3 business days.'
        });
        setFormData({
          organizationName: "",
          contactPersonName: "",
          email: "",
          phoneNumber: "",
          organizationDescription: "",
          logo: null,
          partnershipDescription: "",
          additionalInfo: ""
        });
        // Reset file input
        const fileInput = document.getElementById('logo') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      let errorMessage = 'Failed to submit form. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      // Handle specific error cases
      if (errorMessage.includes('File size too large')) {
        errorMessage = 'Your logo file is too large. Please upload an image smaller than 200MB.';
      } else if (errorMessage.includes('Failed to fetch')) {
        errorMessage = 'Cannot connect to server. Please make sure the backend is running.';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
      
      // Scroll to error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (200MB = 200 * 1024 * 1024 bytes)
      const maxSize = 200 * 1024 * 1024;
      if (file.size > maxSize) {
        setSubmitStatus({
          type: 'error',
          message: 'File size too large. Maximum size is 200MB. Please choose a smaller image.'
        });
        e.target.value = ''; // Reset file input
        return;
      }
      
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml'];
      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus({
          type: 'error',
          message: 'Invalid file type. Please upload an image file (PNG, JPG, GIF, or SVG).'
        });
        e.target.value = ''; // Reset file input
        return;
      }
      
      // Clear any previous errors
      setSubmitStatus({ type: null, message: '' });
      
      setFormData({
        ...formData,
        logo: file
      });
    }
  };

  const partnershipBenefits = [
    {
      icon: Eye,
      title: "Visibility",
      description: "Gain exposure to 100+ talented tech professionals across Software Engineering, Cloud, Data, and Machine Learning tracks. Your brand will be showcased throughout the program.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Skill Building",
      description: "Contribute to developing the next generation of tech talent. Share your expertise through workshops, training sessions, and hands-on mentorship opportunities.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Connect directly with participants through structured mentorship programs. Guide teams, provide feedback, and help shape their professional development journey.",
      color: "text-accent"
    },
    {
      icon: Rocket,
      title: "Career Launching",
      description: "Get early access to top talent for recruitment. Participate in career launch sessions, conduct interviews, and build your talent pipeline with program graduates.",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-teal-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Partner with <span className="gradient-text-hero">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join us in shaping the future of tech talent in Africa. Partner with The Accelerator Bridge 
            to connect with emerging professionals and make a lasting impact.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-foreground">
              Partnership <span className="gradient-text-hero">Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how partnering with us creates value for your organization and our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className="p-8 bg-card hover:shadow-xl transition-all duration-300 border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                      <Icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-foreground">
              Partnership <span className="gradient-text-hero">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to engage with our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border text-center">
              <div className="text-4xl font-black gradient-text-hero mb-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Sponsorship</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Support the program financially and gain prominent brand visibility across all program materials and events.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="text-4xl font-black gradient-text-hero mb-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Mentorship</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Provide expert mentors from your organization to guide participants through technical and professional development.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="text-4xl font-black gradient-text-hero mb-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Recruitment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get early access to top talent, participate in career sessions, and build your talent pipeline with graduates.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black mb-4 text-foreground">
                Become a <span className="gradient-text-hero">Partner</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will reach out to discuss partnership opportunities.
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-semibold mb-2 text-foreground">
                    Organization Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={handleChange}
                    placeholder="Your organization name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="contactPersonName" className="block text-sm font-semibold mb-2 text-foreground">
                    Contact Person's Name
                  </label>
                  <Input
                    id="contactPersonName"
                    name="contactPersonName"
                    type="text"
                    value={formData.contactPersonName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@organization.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2 text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organizationDescription" className="block text-sm font-semibold mb-2 text-foreground">
                  Organization/Individual Description <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="organizationDescription"
                  name="organizationDescription"
                  required
                  value={formData.organizationDescription}
                  onChange={handleChange}
                  placeholder="Tell us about your organization or yourself..."
                  className="w-full min-h-[100px]"
                />
              </div>

              <div>
                <label htmlFor="logo" className="block text-sm font-semibold mb-2 text-foreground">
                  Upload Logo
                </label>
                <div className="flex items-center gap-4">
                  <Input
                    id="logo"
                    name="logo"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/gif,image/svg+xml"
                    onChange={handleFileChange}
                    className="w-full"
                  />
                  <Upload className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Accepted formats: PNG, JPG, GIF, SVG (Max 200MB)
                </p>
                {formData.logo && (
                  <p className="text-xs text-primary mt-1">
                    ✓ Selected: {formData.logo.name} ({(formData.logo.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="partnershipDescription" className="block text-sm font-semibold mb-2 text-foreground">
                  Description of the Partnership <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="partnershipDescription"
                  name="partnershipDescription"
                  required
                  value={formData.partnershipDescription}
                  onChange={handleChange}
                  placeholder="Describe how you'd like to partner with us..."
                  className="w-full min-h-[120px]"
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold mb-2 text-foreground">
                  Any Other Information
                </label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Additional details or questions..."
                  className="w-full min-h-[100px]"
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
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Partnership Request
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 text-foreground">
            Questions About <span className="gradient-text-hero">Partnerships?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is here to help you find the perfect partnership opportunity.
          </p>
          <Button
            size="lg"
            className="gradient-button text-white px-8 rounded-full font-semibold"
            onClick={() => window.location.href = "mailto:community@secretstartups.org"}
          >
            Contact Our Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
