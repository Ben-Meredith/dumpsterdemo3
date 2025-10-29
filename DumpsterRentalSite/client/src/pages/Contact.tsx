import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "dumpster-rental",
      dumpsterSize: "",
      rentalDate: "",
      address: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      return await apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
      toast({
        title: "Booking Request Received!",
        description: "We'll contact you shortly to confirm your rental.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBooking) => {
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-16 md:pt-20 flex items-center justify-center">
        <Card className="max-w-2xl mx-4 p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We've received your booking request and will contact you shortly to confirm the details.
          </p>
          <p className="text-muted-foreground mb-8">
            Need immediate assistance? Call us at{" "}
            <a href="tel:555-123-4567" className="text-primary font-semibold hover:underline">
              (555) 123-4567
            </a>
          </p>
          <Button onClick={() => setSubmitted(false)} data-testid="button-new-booking">
            Submit Another Booking
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Dumpster</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below or give us a call for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service-type">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="dumpster-rental">Dumpster Rental</SelectItem>
                              <SelectItem value="junk-removal">Junk Removal</SelectItem>
                              <SelectItem value="property-cleanout">Property Cleanout</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="dumpsterSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dumpster Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-dumpster-size">
                                  <SelectValue placeholder="Select size (if applicable)" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="10-yard">10 Yard</SelectItem>
                                <SelectItem value="20-yard">20 Yard</SelectItem>
                                <SelectItem value="30-yard">30 Yard</SelectItem>
                                <SelectItem value="40-yard">40 Yard</SelectItem>
                                <SelectItem value="not-sure">Not Sure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="rentalDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Rental Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} data-testid="input-rental-date" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St, City, State ZIP" {...field} data-testid="input-address" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project, any special requirements, or questions you have..."
                              className="min-h-32"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full" disabled={mutation.isPending} data-testid="button-submit">
                      {mutation.isPending ? "Submitting..." : "Submit Booking Request"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Phone</p>
                      <a href="tel:555-123-4567" className="text-muted-foreground hover:text-primary transition-colors" data-testid="sidebar-phone">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Email</p>
                      <a href="mailto:info@budgetdumpsters.com" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="sidebar-email">
                        info@budgetdumpsters.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Service Area</p>
                      <p className="text-muted-foreground text-sm">Serving Your Local Community</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Business Hours</p>
                      <div className="text-muted-foreground text-sm">
                        <p>Mon-Fri: 7am - 7pm</p>
                        <p>Sat-Sun: 8am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="text-lg font-semibold mb-3">Same-Day Service Available</h3>
                <p className="text-sm text-primary-foreground/90 mb-4">
                  Need a dumpster today? Give us a call and we'll do our best to accommodate your urgent needs.
                </p>
                <a href="tel:555-123-4567" data-testid="button-sidebar-call">
                  <Button variant="secondary" className="w-full">
                    Call Now for Immediate Service
                  </Button>
                </a>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>We'll review your request within 1 business hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>Receive a detailed quote and availability confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Schedule delivery at your convenience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span>Prompt pickup when you're done</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
