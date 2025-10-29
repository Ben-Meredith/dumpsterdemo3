import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Phone } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/sizes", label: "Dumpster Sizes" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-background"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">BD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Budget Dumpsters</span>
                <span className="text-xs text-muted-foreground">Locally Owned</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <span
                  className={`text-sm font-medium cursor-pointer transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:555-123-4567" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-phone">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <ThemeToggle />
            <Link href="/contact" data-testid="button-book-now">
              <Button>Book Now</Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md cursor-pointer hover-elevate ${
                    location === link.href ? "bg-accent" : ""
                  }`}
                >
                  <span className="text-sm font-medium">{link.label}</span>
                </div>
              </Link>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <a href="tel:555-123-4567" className="flex items-center gap-2 py-2 text-sm font-medium" data-testid="mobile-link-phone">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Link href="/contact" className="flex-1">
                  <Button className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-button-book-now">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
