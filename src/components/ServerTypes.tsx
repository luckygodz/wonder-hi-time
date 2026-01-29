import { Coins, Leaf, Flame, Gem, Box, ShoppingCart, ArrowRightLeft, Home, Globe, Store, Swords, Compass, Sparkles, Gamepad2, Mountain, Users, Trophy, Skull, Bug, Unlock, ShieldOff, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const serverTypes = [
  {
    id: "economy",
    icon: Coins,
    title: "Economy",
    description: "Buy from shops, sell for profit, grind your way to the top. Become the richest player on the server!",
    isMain: true,
    features: [
      { icon: Coins, text: "Economy system" },
      { icon: Gem, text: "Shards currency" },
      { icon: Box, text: "Interactive spawners" },
      { icon: ShoppingCart, text: "Auction house" },
      { icon: ArrowRightLeft, text: "Orders system" },
      { icon: Compass, text: "Teleportation commands" },
      { icon: Home, text: "Multiple homes" },
      { icon: Globe, text: "Cross-region gameplay" },
      { icon: Sparkles, text: "Free to play" },
      { icon: Store, text: "In-game shop" },
      { icon: Swords, text: "Balanced sell prices" },
      { icon: Zap, text: "Combat system" },
      { icon: Compass, text: "Random teleport command" },
      { icon: Sparkles, text: "And much more!" },
    ],
  },
  {
    id: "vanilla",
    icon: Leaf,
    title: "Vanilla",
    description: "No mods; pure, unmodified Minecraft experience.",
    isMain: false,
    features: [
      { icon: Gamepad2, text: "Minimal mods" },
      { icon: Mountain, text: "Pure vanilla Minecraft" },
      { icon: Globe, text: "Full survival experience" },
      { icon: Users, text: "Community-driven gameplay" },
      { icon: Home, text: "Build without limits" },
    ],
  },
  {
    id: "anarchy",
    icon: Flame,
    title: "Anarchy",
    description: "No rules. No limits. Do whatever you want.",
    isMain: false,
    features: [
      { icon: ShieldOff, text: "No rules whatsoever" },
      { icon: Gamepad2, text: "Minimal mods" },
      { icon: Bug, text: "Cheats and exploits allowed" },
      { icon: Swords, text: "PvP everywhere" },
      { icon: Globe, text: "No protected areas" },
      { icon: Skull, text: "Griefing permitted" },
      { icon: Unlock, text: "Total freedom" },
    ],
  },
];

const ServerTypes = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
          Game Modes
        </h2>
        <p className="font-space text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Choose your adventure. Each server offers a unique way to play.
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          <Accordion type="single" collapsible defaultValue="economy">
            {serverTypes.map((server) => (
              <Card
                key={server.id}
                className={`bg-card/50 backdrop-blur-sm overflow-hidden mb-6 ${
                  server.isMain 
                    ? "border-primary/60 shadow-cosmic ring-1 ring-primary/30" 
                    : "border-primary/30"
                }`}
              >
                {server.isMain && (
                  <div className="bg-gradient-cosmic px-4 py-1.5 text-center">
                    <span className="font-orbitron text-xs font-semibold text-primary-foreground tracking-wider uppercase">
                      ⭐ Main Game Mode
                    </span>
                  </div>
                )}
                <AccordionItem value={server.id} className="border-none">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <server.icon className={`w-10 h-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] ${
                        server.isMain ? "text-primary" : "text-primary/80"
                      }`} />
                      <div>
                        <h3 className="font-orbitron text-xl font-semibold text-foreground">
                          {server.title}
                        </h3>
                        <p className="font-space text-sm text-muted-foreground mt-1">
                          {server.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-primary/20">
                      {server.features.map((feature, index) => (
                        <div
                          key={index}
                          className="font-space text-sm text-foreground/80 py-2 px-3 bg-primary/10 rounded-lg border border-primary/20 flex items-center gap-2"
                        >
                          <feature.icon className="w-4 h-4 text-primary shrink-0" />
                          {feature.text}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServerTypes;
