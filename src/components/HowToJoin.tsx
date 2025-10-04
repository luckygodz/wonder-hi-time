import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Launch Minecraft",
    description: "Open your Minecraft launcher (Java Edition recommended)",
  },
  {
    number: "02",
    title: "Multiplayer",
    description: "Click on 'Multiplayer' from the main menu",
  },
  {
    number: "03",
    title: "Add Server",
    description: "Click 'Add Server' and enter: celestialcity.net",
  },
  {
    number: "04",
    title: "Join & Explore",
    description: "Connect to the server and start your cosmic adventure!",
  },
];

const HowToJoin = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          How to Join
        </h2>
        <p className="font-space text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Getting started is easy! Follow these simple steps to begin your journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-cosmic relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 text-[120px] font-orbitron font-bold text-primary/10 leading-none -mr-4 -mt-8 group-hover:text-primary/20 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="font-orbitron text-2xl font-bold text-primary mb-2">
                  {step.number}
                </div>
                <h3 className="font-orbitron text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="font-space text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
