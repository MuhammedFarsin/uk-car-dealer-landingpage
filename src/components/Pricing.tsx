import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingOptions = [
  {
    title: "Website Redesign",
    price: "£150 - £250",
    description: "Complete site overhaul with modern design",
    features: [
      "Mobile responsive design",
      "Fast loading speeds",
      "Modern UI/UX",
      "SEO optimisation",
      "Contact form integration"
    ]
  },
  {
    title: "Car Detail Pages",
    price: "£15 - £25",
    priceNote: "per car",
    description: "Premium templates for individual vehicles",
    features: [
      "Professional photo galleries",
      "Detailed specifications",
      "Finance calculator",
      "Book test drive CTA",
      "WhatsApp integration"
    ],
    featured: true
  },
  {
    title: "Inventory Optimisation",
    price: "£50 - £80",
    description: "Enhanced browsing and filtering system",
    features: [
      "Advanced search filters",
      "Sort by price/mileage/year",
      "Wishlist functionality",
      "Quick view options",
      "Mobile optimised"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Just honest pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 hover-glow relative ${
                option.featured ? 'glow-border scale-105' : 'border border-border/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                  {option.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gradient">
                    {option.price}
                  </span>
                  {option.priceNote && (
                    <span className="text-muted-foreground ml-2">
                      {option.priceNote}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {option.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={option.featured ? "hero" : "glass"} 
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full -translate-y-1/2"></div>
    </section>
  );
};

export default Pricing;
