import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { tourPackages } from "@/data/tours";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Explore</p>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Tour Packages</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose from our carefully curated spiritual and pilgrimage packages. Every journey is crafted for divine experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tourPackages.map((pkg, i) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative w-full sm:w-56 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  {pkg.featured && (
                    <span className="absolute top-3 left-3 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">★ BESTSELLER</span>
                  )}
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">{pkg.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{pkg.subtitle}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" />{pkg.duration}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gold" />{pkg.locations.length} Stops</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-gold" />{pkg.seatsLeft} seats left</span>
                    </div>
                    <p className="text-muted-foreground text-xs">📅 {pkg.dates}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      {pkg.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm mr-2">₹{pkg.originalPrice.toLocaleString()}</span>
                      )}
                      <span className="text-gold font-heading text-xl">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-muted-foreground text-xs">/person</span>
                    </div>
                    <Link to={`/packages/${pkg.id}`}>
                      <Button variant="hero" size="sm">Details <ArrowRight className="w-3.5 h-3.5" /></Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Packages;
