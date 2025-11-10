import { Target, Zap, Shield, DollarSign, FileCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Target,
    title: "Specialist in UK Dealerships",
    description: "I only work with car dealers, so I know exactly what works"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most projects completed within 1-2 weeks, not months"
  },
  {
    icon: Shield,
    title: "Clean, High-Trust Design",
    description: "Websites that look professional and build customer confidence"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear prices upfront, no hidden costs or surprise fees"
  },
  {
    icon: FileCheck,
    title: "No Contracts",
    description: "Pay per project, no long-term commitments required"
  }
];

const Trust = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why <span className="text-gradient">Trust Me?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm focused on one thing: helping UK car dealers succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-glow group text-center border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <point.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -translate-y-1/2"></div>
    </section>
  );
};

export default Trust;
