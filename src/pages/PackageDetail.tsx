import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { tourPackages } from "@/data/tours";
import { MapPin, Clock, Users, Check, X, ArrowLeft, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = tourPackages.find((p) => p.id === id);
  const [booking, setBooking] = useState({ name: "", phone: "", email: "", travelers: "1", date: "" });

  if (!pkg) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl text-foreground">Package not found</h1>
          <Link to="/packages"><Button variant="hero" className="mt-4">View All Packages</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking submitted! We'll call you within 2 hours to confirm.");
    setBooking({ name: "", phone: "", email: "", travelers: "1", date: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-himalayan-deep/90 via-himalayan-deep/40 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
          <Link to="/packages" className="inline-flex items-center gap-1 text-gold text-sm mb-3 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Packages
          </Link>
          <h1 className="font-heading text-3xl md:text-5xl text-cream">{pkg.title}</h1>
          <p className="text-cream/70 font-display italic mt-1">{pkg.subtitle}</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Clock, label: "Duration", value: pkg.duration },
                { icon: MapPin, label: "Destinations", value: pkg.locations.join(" → ") },
                { icon: Users, label: "Seats Left", value: `${pkg.seatsLeft}/${pkg.totalSeats}` },
              ].map((s) => (
                <div key={s.label} className="bg-card rounded-lg p-4 text-center shadow-card">
                  <s.icon className="w-5 h-5 text-gold mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Trip Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Day-by-Day Itinerary</h2>
              <div className="space-y-3">
                {pkg.itinerary.map((day, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-card rounded-lg shadow-card">
                    <div className="shrink-0 w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-heading text-xs text-center leading-tight">{day.day}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{day.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3">Inclusions</h3>
                {pkg.inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-foreground/80 mb-1.5">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3">Exclusions</h3>
                {pkg.exclusions.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-foreground/80 mb-1.5">
                    <X className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar booking */}
          <div>
            <div className="sticky top-24 bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="mb-4">
                {pkg.originalPrice && (
                  <span className="text-muted-foreground line-through text-lg mr-2">₹{pkg.originalPrice.toLocaleString()}</span>
                )}
                <span className="text-gold font-heading text-3xl">₹{pkg.price.toLocaleString()}</span>
                <span className="text-muted-foreground text-sm">/person</span>
                {pkg.originalPrice && (
                  <span className="ml-2 bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-full">
                    Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                  </span>
                )}
              </div>

              {pkg.seatsLeft <= 10 && (
                <div className="bg-accent/10 text-accent text-sm font-semibold px-3 py-2 rounded-lg mb-4 text-center">
                  🔥 Only {pkg.seatsLeft} seats remaining!
                </div>
              )}

              <form onSubmit={handleBooking} className="space-y-3">
                <input required value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} placeholder="Full Name *" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <input required type="tel" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} placeholder="Phone *" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <input type="email" value={booking.email} onChange={(e) => setBooking({ ...booking, email: e.target.value })} placeholder="Email" className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <input type="date" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <select value={booking.travelers} onChange={(e) => setBooking({ ...booking, travelers: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} Traveler{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
                <div className="bg-muted rounded-lg p-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Price per person</span><span>₹{pkg.price.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Travelers</span><span>×{booking.travelers}</span></div>
                  <div className="border-t border-border mt-2 pt-2 flex justify-between font-heading text-gold text-lg">
                    <span>Total</span><span>₹{(pkg.price * parseInt(booking.travelers)).toLocaleString()}</span>
                  </div>
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">Book Now</Button>
              </form>

              <div className="mt-4 text-center">
                <a href="tel:+919000701888" className="inline-flex items-center gap-1 text-gold text-sm hover:underline">
                  <Phone className="w-3.5 h-3.5" /> Or call +91 90007 01888
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PackageDetail;
