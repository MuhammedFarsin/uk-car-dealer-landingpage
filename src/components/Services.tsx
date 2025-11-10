import { Globe, FileText, Layout, Search, MessageSquare, Facebook } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Redesign",
    description: "Complete overhaul of your existing site with modern design and fast performance"
  },
  {
    icon: FileText,
    title: "Dealer Landing Pages",
    description: "High-converting pages designed specifically for car dealerships"
  },
  {
    icon: Layout,
    title: "Car Detail Page Templates",
    description: "Beautiful templates that showcase every vehicle perfectly"
  },
  {
    icon: Search,
    title: "Inventory Page Setup",
    description: "Easy-to-browse inventory with smart filters and search"
  },
  {
    icon: Globe,
    title: "SEO Setup",
    description: "Get found on Google with proper search engine optimisation"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Lead Integration",
    description: "Direct WhatsApp buttons for instant customer contact"
  },
  {
    icon: Facebook,
    title: "Facebook Page Revamp",
    description: "Professional Facebook business page setup and optimisation"
  }
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Services</span> That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stand out online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-glow group border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default Services;
