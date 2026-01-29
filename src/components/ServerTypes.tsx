import { Coins, Leaf, Flame } from "lucide-react";
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
    features: [
      "💰 Economy system",
      "💎 Shards currency",
      "🎰 Interactive spawners",
      "🏪 Auction house",
      "📦 Orders system",
      "🌀 Teleportation commands",
      "🏠 Multiple homes",
      "🌍 Cross-region gameplay",
      "🆓 Free to play",
      "🛒 In-game shop",
      "⚖️ Balanced sell prices",
      "⚔️ Combat system",
      "🎲 Random teleport command",
      "✨ And much more!",
    ],
  },
  {
    id: "vanilla",
    icon: Leaf,
    title: "Vanilla",
    description: "Pure, unmodified Minecraft experience. No frills, no gimmicks — just classic gameplay.",
    features: [
      "🎮 Minimal mods",
      "🆓 Play freely without restrictions",
      "⛏️ Pure vanilla Minecraft",
      "🌍 Full survival experience",
      "👥 Community-driven gameplay",
      "🏰 Build without limits",
      "🎯 Achievements enabled",
      "🌅 Natural world generation",
    ],
  },
  {
    id: "anarchy",
    icon: Flame,
    title: "Anarchy",
    description: "No rules. No limits. Chaos reigns supreme. Do whatever you want — if you can survive.",
    features: [
      "🚫 No rules whatsoever",
      "🔧 Minimal mods",
      "💥 Cheats and exploits allowed",
      "⚔️ PvP everywhere",
      "🗺️ No protected areas",
      "👹 Griefing permitted",
      "🔓 Total freedom",
      "☠️ Survival of the fittest",
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
          {serverTypes.map((server) => (
            <Card
              key={server.id}
              className="bg-card/50 backdrop-blur-sm border-primary/30 overflow-hidden"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={server.id} className="border-none">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <server.icon className="w-10 h-10 text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
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
                          className="font-space text-sm text-foreground/80 py-2 px-3 bg-primary/10 rounded-lg border border-primary/20"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerTypes;
