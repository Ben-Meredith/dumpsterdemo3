import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">BD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Budget Dumpsters</span>
                <span className="text-xs text-muted-foreground">Locally Owned</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Affordable, reliable dumpster rental and junk removal services for residential and commercial needs.
            </p>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-md w-fit">
                Licensed & Insured
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-md w-fit">
                Same-Day Service
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" data-testid="footer-link-dumpster-rental">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Dumpster Rental
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="footer-link-junk-removal">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Junk Removal
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="footer-link-property-cleanout">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Property Cleanouts
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sizes" data-testid="footer-link-sizes">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Dumpster Sizes
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" data-testid="footer-link-home">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="footer-link-about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" data-testid="footer-link-gallery">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Gallery
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="footer-link-contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:555-123-4567" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-phone">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@budgetdumpsters.com" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-email">
                  info@budgetdumpsters.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Serving Your Local Area</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Mon-Fri: 7am - 7pm</div>
                  <div>Sat-Sun: 8am - 5pm</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Budget Dumpsters. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
