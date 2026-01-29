import Hero from "@/components/Hero";
import ServerTypes from "@/components/ServerTypes";
import Features from "@/components/Features";
import HowToJoin from "@/components/HowToJoin";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServerTypes />
      <Features />
      <HowToJoin />
      <Footer />
    </div>
  );
};

export default Index;
