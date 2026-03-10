import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import BookingForm from "@/components/home/BookingForm";
import MapSection from "@/components/home/MapSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <BookingForm />
      <MapSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
