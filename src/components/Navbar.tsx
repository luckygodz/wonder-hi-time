import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText('celestialcity.top');
    toast.success('IP copied to clipboard!');
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Regions', href: '#regions' },
    { name: 'Features', href: '#features' },
    { name: 'Discord', href: 'https://discord.gg/Qr7M7vQmzY', external: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/80 backdrop-blur-md border-b border-primary/20' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-orbitron text-xl font-bold tracking-tight">Celestial City</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="font-space text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={copyIP}
            className="font-orbitron px-6 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/80 transition-all"
          >
            Play Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-primary/20 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        <div className={`flex flex-col gap-6 transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="font-space text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => {
              copyIP();
              setMobileMenuOpen(false);
            }}
            className="font-orbitron w-full"
          >
            Play Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
