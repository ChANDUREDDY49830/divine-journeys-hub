import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { galleryImages } from "@/data/tours";

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Gallery</p>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Journey in Pictures</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Relive the divine moments from our spiritual tours through these captured memories.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-himalayan-deep/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={[...galleryImages, ...galleryImages][selected].src}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
          <button className="absolute top-6 right-6 text-cream text-3xl hover:text-gold">✕</button>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Gallery;
