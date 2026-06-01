import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import PhotoGallery2 from "@/components/PhotoGallery2";
import RadiantSmileSection from "@/components/RadiantSmileSection";
import QuotesSection from "@/components/QuotesSection";
import HommageSection from "@/components/HommageSection";
import ShraddanjaliSection from "@/components/ShraddanjaliSection2";

import StutiSection from "@/components/StutiSection";
import YouTubeTalksSection from "@/components/YouTubeTalksSection";
import BhajansSection from "@/components/BhajansSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import CharanKamalCarouselSection from "@/components/CharanKamalCarouselSection";
import Footer from "@/components/Footer";
import BhaktiDwarBackButton from "@/components/BhaktiDwarBackButton";

const Index = () => {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    document.getElementById(targetId)?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BhaktiDwarBackButton />
      <HeroSection />
      <div className="bg-section-alt">
        <CharanKamalCarouselSection />
      </div>
      <div className="bg-section-alt">
        <JourneyTimeline />
      </div>
      <PhotoGallery2 />
      <PhotoGallery />
      <RadiantSmileSection />
      <div className="bg-section-alt">
        <ShraddanjaliSection />
      </div>
      <StutiSection />
      <YouTubeTalksSection />
      <BhajansSection />
      <HommageSection />
      <QuotesSection />
      <Footer />
    </div>
  );
};

export default Index;
