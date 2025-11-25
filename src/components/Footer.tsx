import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              The <span className="gradient-text-hero">Accelerator Bridge</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bridging the gap between learning and market readiness through intensive training and mentorship.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/program" className="hover:text-primary transition-colors">Program</Link>
              </li>
              <li>
                <Link to="/tech-tracks" className="hover:text-primary transition-colors">Tech Tracks</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              </li>
            </ul>
          </div>
          
          {/* Tech Specializations */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-foreground">Tech Specializations</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Software Engineering</li>
              <li>Cloud Engineering</li>
              <li>Data Engineering</li>
              <li>Machine Learning & AI</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div id="contact">
            <h4 className="font-bold mb-6 text-lg text-foreground">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+254796445130" className="hover:text-primary transition-colors">
                  +254 796 445130
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@acceleratorbridge.com" className="hover:text-primary transition-colors">
                  info@acceleratorbridge.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-foreground">Event Details</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Program Dates</p>
                  <p>5-Week Intensive</p>
                  <p className="text-xs mt-1">Starting January 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Format</p>
                  <p>Virtual & Hybrid</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Live Event</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="font-medium">© 2025 SkillME X SecretStartups - The Accelerator Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
