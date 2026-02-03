import { Sparkles, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  const resourceLinks = [
    { name: 'Store', href: '#' },
    { name: 'Wiki', href: '#' },
    { name: 'Staff Team', href: '#' },
    { name: 'Bans', href: '#' },
  ];

  const supportLinks = [
    { name: 'Discord', href: 'https://discord.gg/Qr7M7vQmzY', external: true },
    { name: 'Email', href: 'mailto:support@celestialcity.top' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <footer className="border-t border-primary/20 py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-orbitron text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                Celestial City
              </span>
            </div>
            <p className="font-space text-muted-foreground max-w-sm mb-6">
              The world's first multi-region premium economy server. Built by players, for players. Dedicated to low-latency and high-quality gameplay.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://discord.gg/Qr7M7vQmzY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/20 transition-colors border border-primary/20"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="mailto:support@celestialcity.top"
                className="p-2 rounded-lg bg-card hover:bg-primary/20 transition-colors border border-primary/20"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-orbitron font-bold mb-6 uppercase text-xs tracking-widest text-muted-foreground">
              Resources
            </h4>
            <ul className="space-y-4 font-space text-muted-foreground text-sm">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-orbitron font-bold mb-6 uppercase text-xs tracking-widest text-muted-foreground">
              Support
            </h4>
            <ul className="space-y-4 font-space text-muted-foreground text-sm">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-xs font-space">
          <p>© {new Date().getFullYear()} Celestial City. Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.</p>
          <p>Created with ❤️ by <span className="text-primary font-semibold">luckygodz</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
