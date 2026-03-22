import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustriesSection from "@/components/IndustriesSection";
import BetaSection from "@/components/BetaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <IndustriesSection />
      <BetaSection />
      <Footer />
    </div>
  );
};

export default Index;
