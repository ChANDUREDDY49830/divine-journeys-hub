import { Shield, Heart, Mountain, Users, Headphones, Award } from "lucide-react";

const reasons = [
  { icon: Mountain, title: "Expert Kailash Guides", description: "Experienced guides who have led 50+ successful Kailash Mansarovar expeditions." },
  { icon: Shield, title: "Safety First", description: "Complete medical support, oxygen cylinders, and emergency evacuation plans." },
  { icon: Heart, title: "Spiritual Experience", description: "Authentic spiritual guidance with puja arrangements at every sacred site." },
  { icon: Users, title: "Small Groups", description: "Intimate group sizes for a personal and comfortable journey." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock assistance before, during, and after your yatra." },
  { icon: Award, title: "4.5★ Rated", description: "Consistently rated excellent by hundreds of happy pilgrims." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Why Touch Kailash</p>
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">Why Choose Us</h2>
          <p className="text-cream/60 max-w-xl mx-auto">A decade of organizing flawless spiritual journeys, trusted by pilgrims across India.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group p-6 rounded-xl border border-gold/10 bg-cream/5 hover:bg-gold/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <r.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg text-cream mb-2">{r.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
