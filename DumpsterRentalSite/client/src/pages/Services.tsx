import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Truck, Trash2, Home, Clock, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Dumpster Rental",
      description: "Our dumpster rental service provides flexible solutions for projects of all sizes. Whether you're tackling a home renovation, construction project, or major cleanout, we have the right size dumpster for your needs.",
      features: [
        "Multiple size options (10-40 cubic yards)",
        "Flexible rental periods",
        "Convenient delivery and pickup",
        "Residential and commercial service",
        "Affordable flat-rate pricing",
      ],
      color: "primary",
    },
    {
      icon: Trash2,
      title: "Junk Removal",
      description: "Professional junk hauling services that save you time and effort. Our team handles all the heavy lifting, loading, and disposal. Perfect for furniture removal, appliance disposal, and general debris.",
      features: [
        "Full-service hauling",
        "No heavy lifting required",
        "Eco-friendly disposal",
        "Same-day service available",
        "Furniture and appliance removal",
      ],
      color: "primary",
    },
    {
      icon: Home,
      title: "Property Cleanouts",
      description: "Complete property cleanup services for estates, foreclosures, rental turnovers, and hoarding situations. We handle everything from sorting to disposal with professionalism and care.",
      features: [
        "Estate cleanouts",
        "Foreclosure cleanup",
        "Rental property turnovers",
        "Garage and basement clearing",
        "Complete debris removal",
      ],
      color: "primary",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Contact Us",
      description: "Call or book online. Tell us about your project and timeline.",
    },
    {
      step: "2",
      title: "Choose Size",
      description: "We'll help you select the perfect dumpster size for your needs.",
    },
    {
      step: "3",
      title: "Schedule Delivery",
      description: "Pick your delivery date. Same-day service often available.",
    },
    {
      step: "4",
      title: "We Pickup",
      description: "When you're done, we'll promptly pick up and dispose responsibly.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive waste management solutions designed to make your project easier
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-elevate transition-all" data-testid={`card-service-${index}`}>
                <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="bg-card border rounded-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                <Clock className="w-4 h-4" />
                Same-Day Service Available
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our simple four-step process makes renting a dumpster easy and stress-free
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center" data-testid={`step-${index}`}>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Dumpster?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Get started today with affordable, reliable service from your local waste management experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="button-cta-quote">
              <Button size="lg" variant="secondary" className="px-8">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/sizes" data-testid="button-cta-sizes">
              <Button size="lg" variant="outline" className="px-8 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-white/30">
                View Dumpster Sizes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
