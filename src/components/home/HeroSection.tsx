import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-kailash.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Mount Kailash Mansarovar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-himalayan-deep/80 via-himalayan-deep/50 to-himalayan-deep/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <p className="text-gold font-display italic text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          ✦ Trusted by 500+ Pilgrims ✦
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Experience the Divine Journey to{" "}
          <span className="text-gradient-gold">Kailash Mansarovar</span>
        </h1>
        <p className="font-body text-cream/80 text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Embark on a life-transforming pilgrimage with Hyderabad's most trusted spiritual tour operator. Expert guides, comfortable stays, and divine experiences await.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <Link to="/packages">
            <Button variant="hero" size="lg" className="text-base px-8">
              Book Now <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/packages">
            <Button variant="heroOutline" size="lg" className="text-base px-8">
              View Packages
            </Button>
          </Link>
          <a href="tel:+919000701888">
            <Button variant="heroOutline" size="lg" className="text-base px-8 gap-2">
              <Phone className="w-4 h-4" /> Talk to Expert
            </Button>
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.9s" }}>
          {[
            { value: "500+", label: "Happy Pilgrims" },
            { value: "4.5★", label: "Google Rating" },
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Successful Yatras" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div className="text-gold font-heading text-2xl md:text-3xl">{stat.value}</div>
              <div className="text-cream/60 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
