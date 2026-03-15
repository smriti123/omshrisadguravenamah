import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import QuotesSection from "@/components/QuotesSection";
import ShraddanjaliSection from "@/components/ShraddanjaliSection";
import YouTubeTalksSection from "@/components/YouTubeTalksSection";
import BhajansSection from "@/components/BhajansSection";
import SansmaraniyaKshanSection from "@/components/SansmaraniyaKshanSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PhotoGallery />
      <QuotesSection />
      <ShraddanjaliSection />
      <YouTubeTalksSection />
      <SansmaraniyaKshanSection />
      <BhajansSection />
      <Stuti />
      <Footer />
    </div>
  );
};

export default Index;
