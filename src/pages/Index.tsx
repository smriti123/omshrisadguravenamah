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
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PhotoGallery />     
      <ShraddanjaliSection />      
      <StutiSection />
      <JourneyTimeline />
      <YouTubeTalksSection />
      <SansmaraniyaKshanSection />
      <BhajansSection />
       <QuotesSection />
      <Footer />
    </div>
  );
};

export default Index;
