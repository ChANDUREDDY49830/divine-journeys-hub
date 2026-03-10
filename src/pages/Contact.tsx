import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Get in Touch</p>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Have questions about our tours? We'd love to help you plan your spiritual journey.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Phone, label: "Phone", value: "+91 90007 01888", href: "tel:+919000701888" },
                  { icon: Mail, label: "Email", value: "info@touchkailash.com", href: "mailto:info@touchkailash.com" },
                  { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 7PM", href: "" },
                  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919000701888" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href || undefined}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="bg-card rounded-xl p-5 shadow-card hover:shadow-lg transition-shadow block"
                  >
                    <item.icon className="w-6 h-6 text-gold mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-foreground font-semibold text-sm">{item.value}</p>
                  </a>
                ))}
              </div>

              <div className="bg-card rounded-xl p-5 shadow-card">
                <MapPin className="w-6 h-6 text-gold mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Office Address</p>
                <p className="text-foreground font-semibold text-sm">X Road, TMR Enclave, Hanuman Nagar Colony, Meerpet, Hyderabad, Telangana 500097</p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-card h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2!2d78.5264!3d17.3297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMeerpet%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-card space-y-4">
              <h3 className="font-heading text-xl text-foreground mb-2">Send us a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name *" className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email *" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
              <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message *" rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
              <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
