import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Package } from "lucide-react";
import heroImage from "@assets/generated_images/Attachment1.jpeg";
import dumpster12Yard from "@assets/generated_images/Attachment-1 5.jpeg";
import dumpster16Yard from "@assets/generated_images/Attachment-1 6.jpeg";

export default function DumpsterSizes() {
  const sizes = [
    {
      name: "12 Yard Dumpster",
      dimensions: "Compact size for residential projects",
      capacity: "12 cubic yards",
      image: dumpster12Yard,
      pricing: [
        { duration: "24 hours", price: "$250" },
        { duration: "2 days", price: "$275" },
        { duration: "3 days", price: "$300" },
        { duration: "4 days", price: "$325" },
        { duration: "5 days", price: "$350" },
        { duration: "6 days", price: "$375" },
        { duration: "Week", price: "$400" },
      ],
      ideal: [
        "Small bathroom remodels",
        "Garage cleanouts",
        "Minor landscaping projects",
        "Small deck removal",
        "Carpet removal",
      ],
      popular: true,
    },
    {
      name: "16 Yard Dumpster",
      dimensions: "Larger capacity for bigger projects",
      capacity: "16 cubic yards",
      image: dumpster16Yard,
      pricing: [
        { duration: "2 days (minimum)", price: "$325" },
        { duration: "3 days", price: "$350" },
        { duration: "4 days", price: "$375" },
        { duration: "5 days", price: "$400" },
        { duration: "7 days", price: "$450" },
      ],
      ideal: [
        "Medium home renovations",
        "Roof replacements",
        "Large cleanouts",
        "Flooring removal",
        "Deck or fence removal",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dumpster Sizes & Pricing</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We carry 12 yard and 16 yard containers. All rentals include delivery, pickup, and disposal.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              *All rental prices are minimum prices depending on location of site and materials being loaded (weight)
            </p>
          </div>

          <div className="mb-16 rounded-lg overflow-hidden">
            <img
              src={heroImage}
              alt="Our Dumpsters"
              className="w-full h-auto object-cover"
              data-testid="img-hero"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {sizes.map((size, index) => (
              <Card
                key={index}
                className={`p-6 md:p-8 relative hover-elevate transition-all ${
                  size.popular ? "border-primary border-2" : ""
                }`}
                data-testid={`card-size-${index}`}
              >
                {size.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={size.image}
                    alt={size.name}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{size.name}</h2>
                    <p className="text-sm text-muted-foreground">{size.dimensions}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b">
                  <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                  <p className="font-semibold">{size.capacity}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3">Rental Pricing:</p>
                  <div className="space-y-2">
                    {size.pricing.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-muted rounded-md p-3">
                        <span className="text-sm">{price.duration}</span>
                        <span className="font-semibold text-primary">{price.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3">Ideal For:</p>
                  <ul className="space-y-2">
                    {size.ideal.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" data-testid={`button-select-size-${index}`}>
                  <Button className="w-full" variant={size.popular ? "default" : "outline"}>
                    Select This Size
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Size You Need?</h2>
              <p className="text-muted-foreground mb-6">
                Our experienced team can help you choose the right dumpster size for your specific project. 
                We'll ask about your project scope and recommend the most cost-effective option.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:555-123-4567" data-testid="button-call-help">
                  <Button size="lg">
                    Call (555) 123-4567
                  </Button>
                </a>
                <Link href="/contact" data-testid="button-quote-help">
                  <Button size="lg" variant="outline">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
