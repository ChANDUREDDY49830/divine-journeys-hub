import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BookingForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", package: "", date: "", travelers: "1", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted! Our team will contact you within 2 hours.");
    setForm({ name: "", phone: "", email: "", package: "", date: "", travelers: "1", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-dark relative" id="booking">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Start Your Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">Quick Booking</h2>
            <p className="text-cream/60">Fill the form and our expert will call you within 2 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-cream/5 backdrop-blur border border-gold/10 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full Name *"
                className="px-4 py-3 rounded-lg bg-cream/10 text-cream placeholder:text-cream/40 border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              />
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone Number *"
                className="px-4 py-3 rounded-lg bg-cream/10 text-cream placeholder:text-cream/40 border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email Address"
                className="px-4 py-3 rounded-lg bg-cream/10 text-cream placeholder:text-cream/40 border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              />
              <select
                value={form.package}
                onChange={(e) => setForm({ ...form, package: e.target.value })}
                className="px-4 py-3 rounded-lg bg-cream/10 text-cream border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              >
                <option value="" className="bg-secondary">Select Package</option>
                <option value="kailash" className="bg-secondary">Kailash Mansarovar Yatra</option>
                <option value="chardham" className="bg-secondary">Char Dham Yatra</option>
                <option value="varanasi" className="bg-secondary">Varanasi Spiritual Tour</option>
                <option value="nepal" className="bg-secondary">Nepal Muktinath Yatra</option>
              </select>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="px-4 py-3 rounded-lg bg-cream/10 text-cream border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              />
              <select
                value={form.travelers}
                onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                className="px-4 py-3 rounded-lg bg-cream/10 text-cream border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n} className="bg-secondary">{n} Traveler{n > 1 ? "s" : ""}</option>
                ))}
              </select>
            </div>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Any special requirements..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-cream/10 text-cream placeholder:text-cream/40 border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold text-sm resize-none"
            />
            <Button type="submit" variant="hero" size="lg" className="w-full text-base">
              Submit Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
