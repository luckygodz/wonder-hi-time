import { Globe, Users, Shield, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Multi-Region Servers",
    description: "Play with low latency from Asia, North America, or Central Europe",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of players exploring, building, and competing together",
  },
  {
    icon: Shield,
    title: "Anti-Cheat Protection",
    description: "Fair gameplay on Economy & Vanilla with advanced anti-cheat systems",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated staff team ready to help via Discord anytime",
  },
];

const Features = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          Why Join Us?
        </h2>
        <p className="font-space text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Experience Minecraft like never before with our global network
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-cosmic group"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary group-hover:text-cosmic-pink transition-colors drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
              <h3 className="font-orbitron text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="font-space text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
