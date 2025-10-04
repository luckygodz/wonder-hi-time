const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto text-center">
        <h3 className="font-orbitron text-2xl font-bold mb-2 bg-gradient-cosmic bg-clip-text text-transparent">
          CELESTIAL CITY
        </h3>
        <p className="font-space text-muted-foreground mb-6">
          Your gateway to cosmic adventures
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <p className="font-space text-sm text-muted-foreground">
            Created with ❤️ by <span className="text-primary font-semibold">luckygodz</span>
          </p>
          <p className="font-space text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Celestial City. Not affiliated with Mojang or Microsoft.
          </p>
        </div>
      </div>
      
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-glow opacity-20 blur-3xl" />
    </footer>
  );
};

export default Footer;
