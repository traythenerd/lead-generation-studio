import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#about",
    label: "About"
  }, {
    href: "#services",
    label: "Services"
  }, {
    href: "#tiers",
    label: "Tiers"
  }, {
    href: "#sample",
    label: "Sample"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">⌕</span>
            </div>
            <span className="font-semibold text-foreground text-lg hidden sm:block">
              Oliver
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium tracking-wide">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-accent text-primary-foreground rounded-lg px-6 shadow-soft hover:shadow-hover transition-all duration-300">
              <a href="#contact">Request a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors duration-200 text-base font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
              <Button asChild className="gradient-accent text-primary-foreground rounded-lg mt-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Request a Quote
                </a>
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;