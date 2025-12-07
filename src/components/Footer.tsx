const Footer = () => {
  return <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">⌕</span>
            </div>
            <span className="font-semibold text-foreground">Tray Bennet aka. The Nerd</span>
          </div>
          
          

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oliver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;