import { Star } from "lucide-react";
import { reviews } from "@/data/tours";

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">What Our Pilgrims Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div
              key={review.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 font-display italic text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-foreground">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.trip}</p>
                </div>
                <span className="text-muted-foreground text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
