import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Touch Kailash Tours" className="h-10 md:h-12" />
          <div className="hidden sm:block">
            <span className="font-heading text-gold text-sm md:text-base leading-tight block">Touch Kailash</span>
            <span className="text-secondary-foreground/60 text-xs">Tours & Travels</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === link.to ? "text-gold" : "text-secondary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+919000701888">
            <Button variant="hero" size="sm" className="gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-secondary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-gold/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to ? "text-gold" : "text-secondary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919000701888">
              <Button variant="hero" size="sm" className="w-full gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
