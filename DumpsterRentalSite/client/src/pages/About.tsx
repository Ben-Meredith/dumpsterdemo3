import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Users, Award, Truck } from "lucide-react";
import deliveryImage from "@assets/generated_images/Dumpster_delivery_service_action_b7eadeec.png";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "As a locally owned business, we're committed to serving our neighbors with integrity and care.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Professional, reliable service that exceeds expectations. Licensed and fully insured.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We go the extra mile to ensure a smooth experience.",
    },
    {
      icon: Truck,
      title: "Always Reliable",
      description: "On-time delivery, prompt pickup, and dependable service you can count on every time.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Budget Dumpsters</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted local partner for affordable, reliable waste management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Locally Owned, Community Focused</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Budget Dumpsters is a family-owned business proudly serving our local community. We understand 
                  the importance of reliable, affordable waste management services for both residential and 
                  commercial projects.
                </p>
                <p>
                  Founded with a simple mission: to provide honest, transparent pricing and exceptional service 
                  to our neighbors. We're not just a faceless corporation—we're your neighbors, and we take pride 
                  in helping our community with their waste disposal needs.
                </p>
                <p>
                  Whether you're tackling a home renovation, managing a construction site, or cleaning out a 
                  property, we have the experience and equipment to handle projects of all sizes. Our team is 
                  committed to making the rental process as simple and stress-free as possible.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={deliveryImage}
                alt="Budget Dumpsters delivery service"
                className="rounded-lg w-full h-auto object-cover"
                data-testid="img-about-delivery"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover-elevate transition-all" data-testid={`card-value-${index}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Licensed and insured for your peace of mind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Transparent, competitive pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Same-day service available for urgent needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Multiple dumpster sizes for any project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Friendly, professional customer service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Environmentally responsible disposal practices</span>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg mb-6">
                  Ready to experience the Budget Dumpsters difference? Contact us today for a free quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" data-testid="button-about-quote">
                    <Button size="lg">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <a href="tel:555-123-4567" data-testid="button-about-call">
                    <Button size="lg" variant="outline">
                      Call (555) 123-4567
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
