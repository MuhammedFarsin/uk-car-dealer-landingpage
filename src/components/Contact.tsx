import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <footer className="py-16 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how I can help your dealership stand out online
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Mail className="w-5 h-5" />
              Email
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Phone className="w-5 h-5" />
              Call
            </Button>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm">
              © 2024 UK Car Dealership Web Specialist. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Final Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full"></div>
    </footer>
  );
};

export default Contact;
