import { Phone, MapPin, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Touch Kailash Tours" className="h-16 mb-4" />
            <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
              Your trusted partner for spiritual journeys to Kailash Mansarovar and sacred destinations across India and beyond.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="text-gold">★★★★</span>
              <span className="text-gold">½</span>
              <span className="text-secondary-foreground/60 text-sm">(4.5/5 · 17 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Tour Packages", to: "/packages" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-secondary-foreground/70 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919000701888" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-gold transition-colors text-sm">
                <Phone className="w-4 h-4 text-gold" />
                +91 90007 01888
              </a>
              <a href="mailto:info@touchkailash.com" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-gold transition-colors text-sm">
                <Mail className="w-4 h-4 text-gold" />
                info@touchkailash.com
              </a>
              <div className="flex items-start gap-2 text-secondary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                X Road, TMR Enclave, Hanuman Nagar Colony, Meerpet, Hyderabad, Telangana 500097
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm">
                <Clock className="w-4 h-4 text-gold" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Stay Updated</h4>
            <p className="text-secondary-foreground/70 text-sm mb-3">Get early bird offers and trip updates.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-lg bg-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40 text-sm border border-secondary-foreground/10 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="bg-gradient-gold text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 text-center text-secondary-foreground/50 text-sm">
          © 2026 Touch Kailash Tours And Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
