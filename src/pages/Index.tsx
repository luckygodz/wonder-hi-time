import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToJoin from "@/components/HowToJoin";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowToJoin />
      <Footer />
    </div>
  );
};

export default Index;
