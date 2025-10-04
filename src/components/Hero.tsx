import { Button } from "@/components/ui/button";
import { Rocket, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import StarField from "./StarField";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "celestialcity.net";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast.success("Server IP copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarField />
      
      {/* Cosmic glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="animate-float">
          <Rocket className="w-20 h-20 mx-auto mb-8 text-primary drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]" />
        </div>
        
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent animate-pulse-glow">
          CELESTIAL CITY
        </h1>
        
        <p className="font-space text-xl md:text-2xl mb-4 text-foreground/90 max-w-3xl mx-auto">
          Explore the cosmos. Build among the stars.
        </p>
        
        <p className="font-space text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          A space-themed Minecraft server where your imagination knows no bounds
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="font-orbitron text-lg px-8 py-6 bg-gradient-cosmic hover:shadow-glow-purple transition-all duration-300 transform hover:scale-105"
          >
            Join the Adventure
          </Button>
          
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-4 shadow-cosmic">
            <code className="font-space text-primary font-semibold">{serverIP}</code>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="hover:bg-primary/20 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4 text-primary" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="inline-block bg-card/30 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2">
          <p className="font-space text-sm text-muted-foreground">
            Created by <span className="text-primary font-semibold">luckygodz</span>
          </p>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
