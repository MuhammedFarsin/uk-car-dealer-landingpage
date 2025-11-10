import { Button } from "@/components/ui/button";
import { Video, ArrowRight } from "lucide-react";

const Audit = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card glow-border rounded-3xl p-12 md:p-16 text-center hover-glow animate-fade-in relative">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-3xl animate-glow-pulse"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
                <Video className="w-10 h-10 text-accent" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Get Your <span className="text-gradient">Free Website Audit</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                I'll send you a <span className="text-foreground font-semibold">1-minute personalised audit video</span> showing 
                improvements and mistakes on your current website — completely free, no strings attached.
              </p>

              <Button variant="hero" size="lg" className="group text-lg">
                Request Free Audit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                ✓ No obligation · ✓ Delivered within 24 hours · ✓ Actionable insights
              </p>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audit;
