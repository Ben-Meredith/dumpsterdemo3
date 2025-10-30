import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Trash2, Home as HomeIcon, Clock, CheckCircle, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/Attachment-1 2.jpeg";

export default function Home() {
  const services = [
    {
      icon: Truck,
      title: "Dumpster Rental",
      description: "Flexible rental periods with multiple size options. Perfect for home renovations, construction projects, and large cleanouts.",
      link: "/services",
    },
    {
      icon: Trash2,
      title: "Junk Removal",
      description: "Professional junk hauling services. We handle everything from furniture removal to general debris. Fast and efficient.",
      link: "/services",
    },
    {
      icon: HomeIcon,
      title: "Property Cleanouts",
      description: "Complete property cleanup services for estates, foreclosures, and rental turnovers. We handle all the heavy lifting.",
      link: "/services",
    },
  ];

  const features = [
    { icon: Clock, text: "Same-Day Service Available" },
    { icon: CheckCircle, text: "Locally Owned & Operated" },
    { icon: CheckCircle, text: "Affordable Flat-Rate Pricing" },
    { icon: CheckCircle, text: "Multiple Dumpster Sizes" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Affordable Dumpster Rentals
            <br />
            <span className="text-primary">Same-Day Service</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Locally owned and operated. Reliable waste management solutions for residential and commercial projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" data-testid="button-hero-quote">
              <Button size="lg" className="text-base px-8 py-6 h-auto">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/sizes" data-testid="button-hero-sizes">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-white/30">
                View Dumpster Sizes
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive waste management solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300 cursor-pointer" data-testid={`card-service-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link href={service.link} data-testid={`link-service-${index}`}>
                  <span className="text-primary font-medium text-sm hover:underline cursor-pointer">
                    Learn More →
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Budget Dumpsters?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Transparent Pricing</h3>
                    <p className="text-primary-foreground/90">No hidden fees. Flat-rate pricing that fits your budget.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Same-Day Delivery</h3>
                    <p className="text-primary-foreground/90">Need it fast? We offer same-day service for urgent projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Local Family Business</h3>
                    <p className="text-primary-foreground/90">Serving our community with pride. We're your neighbors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Multiple Sizes Available</h3>
                    <p className="text-primary-foreground/90">From small cleanouts to major construction projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Call us now for immediate assistance or fill out our online booking form for a free quote.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-6 h-6" />
                <a href="tel:555-123-4567" className="text-2xl font-bold hover:underline" data-testid="text-cta-phone">
                  (555) 123-4567
                </a>
              </div>
              <Link href="/contact" data-testid="button-cta-book">
                <Button variant="secondary" size="lg" className="w-full">
                  Book Online Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
