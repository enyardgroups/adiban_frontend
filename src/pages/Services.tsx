import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, Cpu, Ruler, Factory, Zap, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "TC Documentation & Compliance Assistance",
      description: "Expert guidance for type certification documentation and regulatory compliance for aerospace systems.",
    },
    {
      icon: Cpu,
      title: "Custom Drone Design & Development",
      description: "End-to-end drone design services tailored to your specific requirements and applications.",
    },
    {
      icon: Factory,
      title: "Hardware Design & Development",
      description: "Specialized aviation and electronic hardware design with aerospace-grade precision.",
    },
    {
      icon: Ruler,
      title: "Computer-Aided Design",
      description: "Advanced CAD services for mechanical and structural design optimization.",
    },
    {
      icon: Zap,
      title: "Computer-Aided Manufacturing",
      description: "Precision manufacturing solutions with state-of-the-art CAM technology.",
    },
    {
      icon: Wind,
      title: "Finite Element Analysis / CFD",
      description: "Computational fluid dynamics and structural analysis for optimal performance validation.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Aviation-related and technical services designed to support your innovation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border/40 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 rounded-xl p-8 md:p-12 text-center"
          >
            <h3 className="text-3xl font-display font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Request a quotation or schedule a consultation to discuss your specific requirements
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;