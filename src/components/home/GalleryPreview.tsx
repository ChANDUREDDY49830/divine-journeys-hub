import { galleryImages } from "@/data/tours";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Gallery</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Moments from the Journey</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[160px] group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-himalayan-deep/0 group-hover:bg-himalayan-deep/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button variant="outline">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
