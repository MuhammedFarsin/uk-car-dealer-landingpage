import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    title: "Apex Motor Demo",
    description: "Complete dealership redesign with advanced inventory system and WhatsApp integration",
    image: portfolio1,
    link: "#"
  },
  {
    title: "Midnight Auto Drive",
    description: "Premium car detail pages with 360° views and instant finance calculator",
    image: portfolio2,
    link: "#"
  },
  {
    title: "Sleek Car World",
    description: "Mobile-first responsive design with optimised search and filter system",
    image: portfolio3,
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Sample <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real examples of premium dealership websites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <Button variant="premium" className="w-full group">
                  View Site
                  <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default Portfolio;
