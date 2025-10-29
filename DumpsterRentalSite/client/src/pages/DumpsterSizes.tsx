import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Package } from "lucide-react";
import sizesImage from "@assets/generated_images/Three_dumpster_sizes_comparison_1492bcd3.png";

export default function DumpsterSizes() {
  const sizes = [
    {
      name: "10 Yard Dumpster",
      dimensions: "12' L × 8' W × 3.5' H",
      capacity: "10 cubic yards",
      weight: "Up to 2 tons",
      ideal: [
        "Small bathroom remodels",
        "Garage cleanouts",
        "Minor landscaping projects",
        "Small deck removal",
        "Carpet removal (up to 1,500 sq ft)",
      ],
      truckLoads: "3-4 pickup truck loads",
    },
    {
      name: "20 Yard Dumpster",
      dimensions: "22' L × 8' W × 4.5' H",
      capacity: "20 cubic yards",
      weight: "Up to 3 tons",
      ideal: [
        "Medium home renovations",
        "Roof replacements (up to 2,000 sq ft)",
        "Large cleanouts",
        "Flooring removal (2,000-3,000 sq ft)",
        "Deck or fence removal",
      ],
      truckLoads: "6-8 pickup truck loads",
      popular: true,
    },
    {
      name: "30 Yard Dumpster",
      dimensions: "22' L × 8' W × 6' H",
      capacity: "30 cubic yards",
      weight: "Up to 4 tons",
      ideal: [
        "Major home additions",
        "New construction cleanup",
        "Large demolition projects",
        "Commercial cleanouts",
        "Whole home cleanouts",
      ],
      truckLoads: "9-12 pickup truck loads",
    },
    {
      name: "40 Yard Dumpster",
      dimensions: "22' L × 8' W × 8' H",
      capacity: "40 cubic yards",
      weight: "Up to 5 tons",
      ideal: [
        "Large commercial projects",
        "Complete building demolition",
        "Major construction sites",
        "Large estate cleanouts",
        "Industrial waste removal",
      ],
      truckLoads: "12-16 pickup truck loads",
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dumpster Sizes & Pricing</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect size for your project. All rentals include delivery, pickup, and disposal.
            </p>
          </div>

          <div className="mb-16 rounded-lg overflow-hidden">
            <img
              src={sizesImage}
              alt="Dumpster size comparison"
              className="w-full h-auto object-cover"
              data-testid="img-sizes-comparison"
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

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{size.name}</h2>
                    <p className="text-sm text-muted-foreground">{size.dimensions}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                    <p className="font-semibold">{size.capacity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Weight Limit</p>
                    <p className="font-semibold">{size.weight}</p>
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

                <div className="bg-muted rounded-md p-3 mb-6">
                  <p className="text-xs text-muted-foreground mb-1">Equivalent To</p>
                  <p className="text-sm font-semibold">{size.truckLoads}</p>
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
