import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { tourPackages } from "@/data/tours";

const FeaturedPackages = () => {
  const featured = tourPackages.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Our Packages</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Featured Tour Packages</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Carefully curated spiritual journeys designed to transform your soul and create memories that last a lifetime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((pkg, i) => (
            <div
              key={pkg.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {pkg.featured && (
                  <span className="absolute top-3 left-3 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    ★ BESTSELLER
                  </span>
                )}
                {pkg.seatsLeft <= 10 && (
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Only {pkg.seatsLeft} seats left!
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-foreground mb-1">{pkg.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{pkg.subtitle}</p>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" />{pkg.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gold" />{pkg.locations.length} Destinations</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-gold" />{pkg.seatsLeft}/{pkg.totalSeats}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    {pkg.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm mr-2">₹{pkg.originalPrice.toLocaleString()}</span>
                    )}
                    <span className="text-gold font-heading text-xl">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-xs">/person</span>
                  </div>
                  <Link to={`/packages/${pkg.id}`}>
                    <Button variant="hero" size="sm">
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/packages">
            <Button variant="outline" size="lg">
              View All Packages <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
