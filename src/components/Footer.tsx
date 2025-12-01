const Footer = () => {
  return <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">⌕</span>
            </div>
            <span className="font-semibold text-foreground">Oliver</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#tiers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tiers
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oliver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;