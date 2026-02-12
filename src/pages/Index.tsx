import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import EventSection from "@/components/EventSection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StorySection />
      <EventSection />
      <RsvpSection />
      <FooterSection />
    </div>
  );
};

export default Index;
