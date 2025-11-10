import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Audit from "@/components/Audit";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Portfolio />
      <Services />
      <Pricing />
      <Audit />
      <Trust />
      <Contact />
    </div>
  );
};

export default Index;
