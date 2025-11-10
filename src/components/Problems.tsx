import { Zap, Layout, FileText, MousePointer, Smartphone, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Zap,
    title: "Slow Website",
    description: "Pages take forever to load, customers leave before they see your cars"
  },
  {
    icon: Layout,
    title: "Weak Inventory Layout",
    description: "Cars are hard to browse, filters don't work properly"
  },
  {
    icon: FileText,
    title: "Old-Style Car Pages",
    description: "Boring templates that don't showcase vehicle features"
  },
  {
    icon: MousePointer,
    title: "No 'Book Test Drive' CTA",
    description: "Missing clear calls-to-action at critical moments"
  },
  {
    icon: Smartphone,
    title: "Bad Mobile Experience",
    description: "Site is unusable on phones where most traffic comes from"
  },
  {
    icon: TrendingDown,
    title: "Low Enquiry Conversion",
    description: "Traffic is there but enquiries are frustratingly low"
  }
];

const Problems = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Common Problems</span> UK Dealers Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These issues are costing you sales every single day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card glow-border rounded-2xl p-8 hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-deep-blue/10 blur-[150px] rounded-full -translate-y-1/2"></div>
    </section>
  );
};

export default Problems;
