import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import QuotesSection from "@/components/QuotesSection";
import ShraddanjaliSection from "@/components/ShraddanjaliSection2";
import GurudevAttributesSection from "@/components/GurudevAttributesSection";
import StutiSection from "@/components/StutiSection";
import YouTubeTalksSection from "@/components/YouTubeTalksSection";
import BhajansSection from "@/components/BhajansSection";
import SansmaraniyaKshanSection from "@/components/SansmaraniyaKshanSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="bg-section-alt">
        <JourneyTimeline />
      </div>
      <PhotoGallery />
      <div className="bg-section-alt">
        <ShraddanjaliSection />
      </div>
      <StutiSection />
      <YouTubeTalksSection />
      <div className="bg-section-alt">
        <SansmaraniyaKshanSection />
      </div>
      <BhajansSection />
      <QuotesSection />
      <Footer />
    </div>
  );
};

export default Index;
